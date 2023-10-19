import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { ContactRepository } from './contact.repository';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  controllers: [ContactController],
  providers: [ContactService, ContactRepository],
  imports: [PrismaModule],
})
export class ContactModule {}
