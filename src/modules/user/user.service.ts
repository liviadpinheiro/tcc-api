import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/create-user.dto';
import { HashService } from '../auth/hash/hash.service';
import { UUID } from 'crypto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private hashService: HashService,
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

  async findAll() {
    return this.userRepository.findAll();
  }

  async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  update(id: UUID, updateUserDto: UpdateUserDTO) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: UUID) {
    return this.userRepository.remove(id);
  }
}
