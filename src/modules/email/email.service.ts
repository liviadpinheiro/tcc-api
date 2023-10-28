import { Injectable } from '@nestjs/common';
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';
import { MailerService } from '@nestjs-modules/mailer';
import { MulterFile } from '../spread/dto/multer-file.dto';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendResetPasswordMail(name: string, email: string, resetLink: string) {
    const templatePath = path.join(
      __dirname,
      '.',
      'template',
      'recover-password.hbs',
    );
    const source = fs.readFileSync(templatePath, 'utf8');
    const compiledTemplate = handlebars.compile(source);
    const html = compiledTemplate({ name, resetLink });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Recuperação de Senha',
      html: html,
    };

    return this.mailerService.sendMail(mailOptions);
  }

  async sendSpreadMail(email: string, pdfFile: MulterFile) {
    const templatePath = path.join(__dirname, '.', 'template', 'spread.hbs');
    const source = fs.readFileSync(templatePath, 'utf8');
    const compiledTemplate = handlebars.compile(source);
    const html = compiledTemplate({
      contactLink: `${process.env.FRONTEND_URL}/contato`,
    });

    await this.mailerService.sendMail({
      to: email,
      subject: 'Sua tiragem acaba de chegar! 🔮',
      html,
      attachments: [
        {
          filename: 'tiragem.pdf',
          content: pdfFile.buffer,
          contentType: pdfFile.mimetype,
        },
      ],
    });
  }
}
