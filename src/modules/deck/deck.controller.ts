import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  BadRequestException,
} from '@nestjs/common';
import { DeckService } from './deck.service';
import { CreateDeckDTO, createDeckSchema } from './dto/create-deck.dto';
import { ZodValidationPipe } from 'src/pipes/ZodValidationPipe';

@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createDeckSchema))
  create(@Body() createDeckDto: CreateDeckDTO) {
    try {
      return this.deckService.create(createDeckDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  findAll() {
    try {
      return this.deckService.findAll();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
