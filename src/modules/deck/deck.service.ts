import { Injectable } from '@nestjs/common';
import { CreateDeckDTO } from './dto/create-deck.dto';
import { UpdateDeckDTO } from './dto/update-deck.dto';
import { DeckRepository } from './deck.repository';
import { UUID } from 'crypto';

@Injectable()
export class DeckService {
  constructor(private deckRepository: DeckRepository) {}

  create(createDeckDto: CreateDeckDTO) {
    return this.deckRepository.create(createDeckDto);
  }

  findAll() {
    return this.deckRepository.findAll();
  }

  update(id: UUID, updateDeckDto: UpdateDeckDTO) {
    return this.deckRepository.update(id, updateDeckDto);
  }

  remove(id: UUID) {
    return this.deckRepository.remove(id);
  }
}
