import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/create-user.dto';
import { HashService } from '../auth/hash/hash.service';
import { EmailService } from '../email/email.service';
import { ThrottleService } from '../throttle/throttle.service';
import { ThrottleType } from '../throttle/enum/throttle.enum';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private hashService: HashService,
    private emailService: EmailService,
    private throttleService: ThrottleService,
    private jwtService: JwtService,
  ) {}

  async create(data: CreateUserDTO) {
    const user = await this.findByEmail(data.email);

    if (user) {
      throw new BadRequestException('E-mail já cadastrado');
    }

    const hashedPassword = await this.hashService.hashPassword(data.password);

    Object.assign(data, { password: hashedPassword });

    return this.userRepository.create(data);
  }

  async validateUser(email: string, plainPassword: string): Promise<boolean> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      return false;
    }

    const isValid = await this.hashService.comparePasswords(
      plainPassword,
      user.password,
    );

    return isValid;
  }

  async recoverPassword(email: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new BadRequestException('E-mail não cadastrado na plataforma');
    }

    const throttle = await this.throttleService.create(
      user.id,
      ThrottleType.RECOVER_PASSWORD,
    );

    await this.emailService.sendResetPasswordMail(
      user.fullName.split(' ')[0],
      email,
      `${process.env.FRONTEND_URL}/atualizar-senha?token=${throttle.token}`,
    );

    return 'Sucesso!';
  }

  async updatePassword(token: string, password: string) {
    const isTokenExpired = await this.throttleService.isTokenExpired(
      token,
      ThrottleType.RECOVER_PASSWORD,
    );

    if (isTokenExpired) {
      throw new BadRequestException(
        'Token inválido, peça a recuperação da senha novamente.',
      );
    }

    const decoded = this.jwtService.decode(token) as any;

    const hashedPassword = await this.hashService.hashPassword(password);

    return this.userRepository.updatePassword(decoded.userId, hashedPassword);
  }

  async findAll() {
    return this.userRepository.findAll();
  }

  async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }
}
