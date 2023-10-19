import { Injectable } from '@nestjs/common';
import { Notes } from '@prisma/client';
import { CreateNoteDTO } from './dto/create-note.dto';
import { UpdateNoteDTO } from './dto/update-note.dto';
import { PrismaService } from 'src/database/prisma.service';
import { UUID } from 'crypto';

@Injectable()
export class NotesRepository {
  constructor(private prisma: PrismaService) {}

  create({
    meaning,
    keywords,
    elements_meaning,
    specific_meaning,
    related_theme,
    additional_observation,
    card_id,
    user_id,
  }: CreateNoteDTO): Promise<Notes> {
    return this.prisma.notes.upsert({
      where: {
        card_id_user_id: {
          card_id,
          user_id,
        },
      },
      update: {
        meaning,
        keywords,
        elements_meaning,
        specific_meaning,
        related_theme,
        additional_observation,
      },
      create: {
        meaning,
        keywords,
        elements_meaning,
        specific_meaning,
        related_theme,
        additional_observation,
        card_id,
        user_id,
      },
    });
  }

  findAll(): Promise<Notes[]> {
    return this.prisma.notes.findMany();
  }

  findOneByCardAndUser(cardId: string, userId: string): Promise<Notes | null> {
    return this.prisma.notes.findFirst({
      where: {
        card_id: cardId,
        user_id: userId,
      },
    });
  }

  update(id: UUID, updateNoteDto: UpdateNoteDTO) {
    return this.prisma.notes.update({
      data: updateNoteDto,
      where: {
        id,
      },
    });
  }

  remove(id: UUID) {
    return this.prisma.notes.delete({
      where: {
        id,
      },
    });
  }
}
