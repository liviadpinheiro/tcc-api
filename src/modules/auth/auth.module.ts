import { Module } from '@nestjs/common';
import { HashService } from './hash/hash.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { PrismaService } from 'src/database/prisma.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { EmailService } from '../email/email.service';
import { ThrottleService } from '../throttle/throttle.service';
import { ThrottleRepository } from '../throttle/throttle.repository';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '120m' },
    }),
  ],
  providers: [
    HashService,
    AuthService,
    JwtStrategy,
    UserService,
    UserRepository,
    PrismaService,
    LocalStrategy,
    EmailService,
    ThrottleService,
    ThrottleRepository,
  ],
  exports: [AuthService, HashService],
  controllers: [AuthController],
})
export class AuthModule {}
