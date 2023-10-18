import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { CardRepository } from './card.repository';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  controllers: [CardController],
  providers: [CardService, CardRepository],
  imports: [PrismaModule],
})
export class CardModule {}
