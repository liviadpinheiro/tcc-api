import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  async createUser(data: CreateUserDTO) {
    return this.repository.createUser(data);
  }

  async getUsers() {
    return this.repository.users();
  }

  async getUserByEmail(email: string) {
    return this.repository.user({ email });
  }
}
