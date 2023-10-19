import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDTO, createCardSchema } from './dto/create-card.dto';
import { UpdateCardDTO, updateCardSchema } from './dto/update-card.dto';
import { UUID } from 'crypto';
import { ZodValidationPipe } from 'src/pipes/ZodValidationPipe';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createCardSchema))
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
  @UsePipes(new ZodValidationPipe(updateCardSchema))
  update(@Param('id') id: UUID, @Body() updateCardDto: UpdateCardDTO) {
    return this.cardService.update(id, updateCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.cardService.remove(id);
  }
}
