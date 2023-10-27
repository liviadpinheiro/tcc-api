import { Injectable } from '@nestjs/common';
import { CreateSpreadDTO } from './dto/create-spread.dto';
import * as puppeteer from 'puppeteer';
import * as Handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';
import { formatDate } from 'src/utils/formatData';

@Injectable()
export class SpreadService {
  async generatePDF(data: CreateSpreadDTO) {
    Object.assign(data, {
      spreadDate: formatDate(new Date()),
      consultantBirthdate: formatDate(new Date(data.consultantBirthdate)),
    });

    const templatePath = path.join(
      __dirname,
      '.',
      'template',
      'generate-spread.hbs',
    );
    const source = fs.readFileSync(templatePath, 'utf8');

    Handlebars.registerHelper('increment', function (value) {
      return value + 1;
    });

    const htmlContent = Handlebars.compile(source)(data);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(htmlContent);
    const pdfName = `spread_${new Date()
      .toISOString()
      .replace(/[:T\-]/g, '')}.pdf`;
    const pdfPath = path.join(__dirname, pdfName);

    await page.pdf({
      format: 'A4',
      path: pdfPath,
      printBackground: true,
    });

    await browser.close();

    return `PDF saved at: ${pdfPath}`;
  }
}
