import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',');

  app.use(
    cors({
      origin: allowedOrigins,
    }),
  );

  await app.listen(process.env.PORT || 3500);
}
bootstrap();
