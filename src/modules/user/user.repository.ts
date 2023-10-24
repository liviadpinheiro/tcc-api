import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UUID } from 'crypto';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async create({
    fullName,
    email,
    password,
    cpf,
    birthdate,
  }: CreateUserDTO): Promise<User> {
    return this.prisma.user.create({
      data: {
        fullName,
        password,
        cpf,
        email,
        birthdate: new Date(birthdate),
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async updatePassword(id: UUID, password: string): Promise<User> {
    return this.prisma.user.update({
      data: {
        password,
      },
      where: {
        id,
      },
    });
  }
}
