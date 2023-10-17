import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, createUserSchema } from './dto/create-user.dto';
import { ZodValidationPipe } from 'src/pipes/ZodValidationPipe';
import { UpdateUserDTO, updateUserSchema } from './dto/update-user.dto';
import { UUID } from 'crypto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createUserSchema))
  create(@Body() createUserDto: CreateUserDTO) {
    try {
      return this.userService.create(createUserDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  findAll() {
    try {
      return this.userService.findAll();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Patch(':id')
  @UsePipes(new ZodValidationPipe(updateUserSchema))
  update(@Param('id') id: UUID, @Body() updateUserDto: UpdateUserDTO) {
    try {
      return this.userService.update(id, updateUserDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    try {
      return this.userService.remove(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
