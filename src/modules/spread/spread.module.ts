import { Module } from '@nestjs/common';
import { SpreadService } from './spread.service';
import { SpreadController } from './spread.controller';
import { EmailService } from '../email/email.service';

@Module({
  providers: [SpreadService, EmailService],
  controllers: [SpreadController],
})
export class SpreadModule {}
