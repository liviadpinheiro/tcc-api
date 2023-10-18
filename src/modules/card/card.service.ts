import { Injectable } from '@nestjs/common';
import { CreateCardDTO } from './dto/create-card.dto';
import { UpdateCardDTO } from './dto/update-card.dto';
import { CardRepository } from './card.repository';
import { UUID } from 'crypto';

@Injectable()
export class CardService {
  constructor(private cardRepository: CardRepository) {}

  create(createCardDto: CreateCardDTO) {
    return this.cardRepository.create(createCardDto);
  }

  findAll() {
    return this.cardRepository.findAll();
  }

  findManyByDeckId(deckId: UUID) {
    return this.cardRepository.findManyByDeckId(deckId);
  }

  findOne(id: UUID) {
    return this.cardRepository.findOne(id);
  }

  update(id: UUID, updateCardDto: UpdateCardDTO) {
    return this.cardRepository.update(id, updateCardDto);
  }

  remove(id: UUID) {
    return this.cardRepository.remove(id);
  }
}
