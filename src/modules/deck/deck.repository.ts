import { Injectable } from '@nestjs/common';
import { Deck } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateDeckDTO } from './dto/create-deck.dto';
import { UUID } from 'crypto';
import { UpdateDeckDTO } from './dto/update-deck.dto';

@Injectable()
export class DeckRepository {
  constructor(private prisma: PrismaService) {}

  create({ name, description }: CreateDeckDTO): Promise<Deck> {
    return this.prisma.deck.create({
      data: {
        name,
        description,
      },
    });
  }

  findAll(): Promise<Deck[]> {
    return this.prisma.deck.findMany();
  }

  update(id: UUID, updateDeckDto: UpdateDeckDTO): Promise<Deck> {
    return this.prisma.deck.update({
      data: updateDeckDto,
      where: {
        id,
      },
    });
  }

  remove(id: UUID) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
