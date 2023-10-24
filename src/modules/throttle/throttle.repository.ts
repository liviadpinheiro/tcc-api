import { Injectable } from '@nestjs/common';
import { Throttle } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateThrottleDTO } from './dto/create-throttle.dto';

@Injectable()
export class ThrottleRepository {
  constructor(private prisma: PrismaService) {}

  async create({ userId, type, token }: CreateThrottleDTO): Promise<Throttle> {
    return this.prisma.throttle.create({
      data: {
        token,
        type,
        user_id: userId,
      },
    });
  }

  async findByToken(token: string): Promise<Throttle | null> {
    return this.prisma.throttle.findUnique({
      where: {
        token,
      },
    });
  }

  async remove(token: string): Promise<Throttle> {
    return this.prisma.throttle.delete({
      where: {
        token,
      },
    });
  }
}
