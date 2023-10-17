import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UUID } from 'crypto';
import { UpdateUserDTO } from './dto/update-user.dto';

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

  async update(id: UUID, updateUserDto: UpdateUserDTO): Promise<User> {
    return this.prisma.user.update({
      data: updateUserDto,
      where: {
        id,
      },
    });
  }

  async remove(id: UUID): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
