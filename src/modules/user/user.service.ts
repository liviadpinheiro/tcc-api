import { BadRequestException, HttpCode, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/create-user.dto';
import { HashService } from '../auth/hash/hash.service';

@Injectable()
export class UserService {
  constructor(
    private repository: UserRepository,
    private hashService: HashService,
  ) {}

  async createUser(data: CreateUserDTO) {
    const user = await this.getUserByEmail(data.email);

    if (user) {
      throw new BadRequestException('E-mail já cadastrado');
    }

    const hashedPassword = await this.hashService.hashPassword(data.password);

    Object.assign(data, { password: hashedPassword });

    return this.repository.createUser(data);
  }

  async validateUser(email: string, plainPassword: string): Promise<boolean> {
    const user = await this.repository.user({ email });

    if (!user) {
      return false;
    }

    const isValid = await this.hashService.comparePasswords(
      plainPassword,
      user.password,
    );
    return isValid;
  }

  async getUsers() {
    return this.repository.users();
  }

  async getUserByEmail(email: string) {
    return this.repository.user({ email });
  }
}
