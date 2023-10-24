import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendMail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: process.env.EMAIL,
      to,
      subject,
      text,
    };

    return await this.transporter.sendMail(mailOptions);
  }

  async sendResetPasswordMail(name: string, email: string, resetLink: string) {
    const templatePath = path.join(
      __dirname,
      './template/recover-password.hbs',
    );
    const source = fs.readFileSync(templatePath, 'utf8');
    const compiledTemplate = handlebars.compile(source);
    const html = compiledTemplate({ name, resetLink });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Recuperação de Senha',
      html: html,
    };

    return this.transporter.sendMail(mailOptions);
  }
}
