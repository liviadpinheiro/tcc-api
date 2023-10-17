import { Module } from '@nestjs/common';
import { DeckService } from './deck.service';
import { DeckController } from './deck.controller';
import { DeckRepository } from './deck.repository';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  controllers: [DeckController],
  providers: [DeckService, DeckRepository],
  imports: [PrismaModule],
})
export class DeckModule {}
