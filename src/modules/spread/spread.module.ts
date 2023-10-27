import { Module } from '@nestjs/common';
import { SpreadService } from './spread.service';
import { SpreadController } from './spread.controller';

@Module({
  providers: [SpreadService],
  controllers: [SpreadController],
})
export class SpreadModule {}
