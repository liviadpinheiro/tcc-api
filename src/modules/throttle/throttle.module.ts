import { Module } from '@nestjs/common';
import { ThrottleService } from './throttle.service';
import { ThrottleRepository } from './throttle.repository';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30m' },
    }),
    PrismaModule,
  ],
  providers: [ThrottleService, ThrottleRepository],
  exports: [ThrottleService],
})
export class ThrottleModule {}
