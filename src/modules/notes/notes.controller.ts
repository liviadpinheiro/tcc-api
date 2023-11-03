import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UsePipes,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDTO, createNoteSchema } from './dto/create-note.dto';
import { UpdateNoteDTO, updateNoteSchema } from './dto/update-note.dto';
import { ZodValidationPipe } from 'src/pipes/ZodValidationPipe';
import { UUID } from 'crypto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createNoteSchema))
  create(@Body() createNoteDto: CreateNoteDTO) {
    return this.notesService.create(createNoteDto);
  }

  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @Get('card-id/:cardId/user-id/:userId')
  findOneByCardAndUser(
    @Param('cardId') cardId: string,
    @Param('userId') userId: string,
  ) {
    return this.notesService.findOneByCardAndUser(cardId, userId);
  }

  @Patch(':id')
  @UsePipes(new ZodValidationPipe(updateNoteSchema))
  update(@Param('id') id: UUID, @Body() updateNoteDto: UpdateNoteDTO) {
    return this.notesService.update(id, updateNoteDto);
  }
}
