import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { PrismaModule } from 'src/database/prisma.module';
import { HashService } from '../auth/hash/hash.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, HashService],
  imports: [PrismaModule],
  exports: [UserService],
})
export class UserModule {}
