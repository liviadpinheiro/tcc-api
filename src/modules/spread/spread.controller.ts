import { Body, Controller, Post, Res } from '@nestjs/common';
import { SpreadService } from './spread.service';
import { CreateSpreadDTO } from './dto/create-spread.dto';
import { Response } from 'express';

@Controller('spread')
export class SpreadController {
  constructor(private spreadService: SpreadService) {}

  @Post('/generate')
  async generateSpreadPDF(
    @Body() data: CreateSpreadDTO,
    @Res() response: Response,
  ) {
    const pdf = await this.spreadService.generatePDF(data);

    response.set('Content-Type', 'application/pdf');
    response.send(pdf);
  }
}
