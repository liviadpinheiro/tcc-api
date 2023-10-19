import { Injectable } from '@nestjs/common';
import { Contact } from '@prisma/client';
import { CreateContactDTO } from './dto/create-contact.dto';
import { UpdateContactDTO } from './dto/update-contact.dto';
import { PrismaService } from 'src/database/prisma.service';
import { UUID } from 'crypto';

@Injectable()
export class ContactRepository {
  constructor(private prisma: PrismaService) {}

  create({
    name,
    message,
    state,
    theme,
    email,
    isValidTestimonial,
  }: CreateContactDTO): Promise<Contact> {
    return this.prisma.contact.create({
      data: {
        name,
        message,
        state,
        theme,
        email,
        isValidTestimonial,
      },
    });
  }

  findAll(): Promise<Contact[]> {
    return this.prisma.contact.findMany();
  }

  findTestimonials(): Promise<Contact[]> {
    return this.prisma.contact.findMany({
      where: {
        theme: 'relato',
        isValidTestimonial: true,
      },
      take: 3,
    });
  }

  findOne(id: UUID): Promise<Contact | null> {
    return this.prisma.contact.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: UUID, updateContactDto: UpdateContactDTO): Promise<Contact> {
    return this.prisma.contact.update({
      data: updateContactDto,
      where: {
        id,
      },
    });
  }

  validateTestimonial(id: UUID): Promise<Contact> {
    return this.prisma.contact.update({
      data: {
        isValidTestimonial: true,
      },
      where: {
        id,
      },
    });
  }

  remove(id: UUID): Promise<Contact> {
    return this.prisma.contact.delete({
      where: {
        id,
      },
    });
  }
}
