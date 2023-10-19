import { Injectable } from '@nestjs/common';
import { CreateNoteDTO } from './dto/create-note.dto';
import { UpdateNoteDTO } from './dto/update-note.dto';
import { NotesRepository } from './notes.repository';
import { UUID } from 'crypto';

@Injectable()
export class NotesService {
  constructor(private readonly notesRepository: NotesRepository) {}

  create(createNoteDto: CreateNoteDTO) {
    return this.notesRepository.create(createNoteDto);
  }

  findAll() {
    return this.notesRepository.findAll();
  }

  findOneByCardAndUser(cardId: string, userId: string) {
    return this.notesRepository.findOneByCardAndUser(cardId, userId);
  }

  update(id: UUID, updateNoteDto: UpdateNoteDTO) {
    return this.notesRepository.update(id, updateNoteDto);
  }

  remove(id: UUID) {
    return this.notesRepository.remove(id);
  }
}
