import {
  BadRequestException,
  Body,
  Controller,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, createUserSchema } from './dto/create-user.dto';
import { ZodValidationPipe } from 'src/pipes/ZodValidationPipe';

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

  @Post('recover-password')
  recoverPassword(@Body() data: { email: string }) {
    try {
      return this.userService.recoverPassword(data.email);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Patch('update-password')
  updatePassword(@Body() data: { token: string; password: string }) {
    try {
      return this.userService.updatePassword(data.token, data.password);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
