import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDTO } from './dto/create-card.dto';
import { UpdateCardDTO } from './dto/update-card.dto';
import { UUID } from 'crypto';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  create(@Body() createCardDto: CreateCardDTO) {
    return this.cardService.create(createCardDto);
  }

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

  @Patch(':id')
  update(@Param('id') id: UUID, @Body() updateCardDto: UpdateCardDTO) {
    return this.cardService.update(id, updateCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.cardService.remove(id);
  }
}
