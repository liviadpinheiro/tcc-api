import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { SpreadService } from './spread.service';
import { CreateSpreadDTO } from './dto/create-spread.dto';
import { Response } from 'express';
import { EmailService } from '../email/email.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterFile } from './dto/multer-file.dto';

@Controller('spread')
export class SpreadController {
  constructor(
    private spreadService: SpreadService,
    private emailService: EmailService,
  ) {}

  @Post('/generate')
  async generateSpreadPDF(
    @Body() data: CreateSpreadDTO,
    @Res() response: Response,
  ) {
    try {
      const pdf = await this.spreadService.generatePDF(data);

      response.set('Content-Type', 'application/pdf');
      response.send(pdf);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('/send-mail')
  @UseInterceptors(FileInterceptor('pdf'))
  async sendPdf(
    @UploadedFile() file: MulterFile,
    @Body() data: { email: string },
  ) {
    try {
      return this.emailService.sendSpreadMail(data.email, file);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
