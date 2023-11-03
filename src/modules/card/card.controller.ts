import { Controller, Get, Param } from '@nestjs/common';
import { CardService } from './card.service';
import { UUID } from 'crypto';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  findAll() {
    return this.cardService.findAll();
  }

  @Get('deck-id/:deckId')
  findManyByDeckId(@Param('deckId') deckId: UUID) {
    return this.cardService.findManyByDeckId(deckId);
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.cardService.findOne(id);
  }
}
