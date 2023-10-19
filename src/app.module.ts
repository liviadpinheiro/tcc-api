import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DeckModule } from './modules/deck/deck.module';
import { CardModule } from './modules/card/card.module';
import { NotesModule } from './modules/notes/notes.module';
import { ContactModule } from './modules/contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    DeckModule,
    CardModule,
    NotesModule,
    ContactModule,
  ],
})
export class AppModule {}
