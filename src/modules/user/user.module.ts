import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { PrismaModule } from 'src/database/prisma.module';
import { HashService } from '../auth/hash/hash.service';
import { EmailService } from '../email/email.service';
import { ThrottleService } from '../throttle/throttle.service';
import { ThrottleRepository } from '../throttle/throttle.repository';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    HashService,
    EmailService,
    ThrottleService,
    ThrottleRepository,
  ],
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30m' },
    }),
  ],
  exports: [UserService],
})
export class UserModule {}
