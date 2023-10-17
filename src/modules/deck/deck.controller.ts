import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  BadRequestException,
} from '@nestjs/common';
import { DeckService } from './deck.service';
import { CreateDeckDTO, createDeckSchema } from './dto/create-deck.dto';
import { UpdateDeckDTO, updateDeckSchema } from './dto/update-deck.dto';
import { UUID } from 'crypto';
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

  @Patch(':id')
  @UsePipes(new ZodValidationPipe(updateDeckSchema))
  update(@Param('id') id: UUID, @Body() updateDeckDto: UpdateDeckDTO) {
    try {
      return this.deckService.update(id, updateDeckDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    try {
      return this.deckService.remove(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
