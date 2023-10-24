import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DeckModule } from './modules/deck/deck.module';
import { CardModule } from './modules/card/card.module';
import { NotesModule } from './modules/notes/notes.module';
import { ContactModule } from './modules/contact/contact.module';
import { EmailService } from './modules/email/email.service';
import { EmailModule } from './modules/email/email.module';
import { ThrottleModule } from './modules/throttle/throttle.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    DeckModule,
    CardModule,
    NotesModule,
    ContactModule,
    EmailModule,
    ThrottleModule,
  ],
  providers: [EmailService],
})
export class AppModule {}
