import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DeckModule } from './modules/deck/deck.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthModule, DeckModule],
})
export class AppModule {}
