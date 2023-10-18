import { Injectable } from '@nestjs/common';
import { Card } from '@prisma/client';
import { CreateCardDTO } from './dto/create-card.dto';
import { UpdateCardDTO } from './dto/update-card.dto';
import { PrismaService } from 'src/database/prisma.service';
import { UUID } from 'crypto';

@Injectable()
export class CardRepository {
  constructor(private prisma: PrismaService) {}
  create({ name, number, imageUrl, deck_id }: CreateCardDTO): Promise<Card> {
    return this.prisma.card.create({
      data: {
        name,
        number,
        imageUrl,
        deck_id,
      },
    });
  }

  findAll(): Promise<Card[]> {
    return this.prisma.card.findMany();
  }

  findManyByDeckId(deckId: UUID): Promise<Card[]> {
    return this.prisma.card.findMany({
      where: {
        deck_id: deckId,
      },
      orderBy: {
        number: 'asc',
      },
    });
  }

  findOne(id: UUID): Promise<Card | null> {
    return this.prisma.card.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: UUID, updateCardDto: UpdateCardDTO): Promise<Card> {
    return this.prisma.card.update({
      data: updateCardDto,
      where: {
        id,
      },
    });
  }

  remove(id: UUID) {
    return this.prisma.card.delete({
      where: {
        id,
      },
    });
  }
}
