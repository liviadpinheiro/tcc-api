import { Injectable } from '@nestjs/common';
import { CreateContactDTO } from './dto/create-contact.dto';
import { UpdateContactDTO } from './dto/update-contact.dto';
import { ContactRepository } from './contact.repository';
import { UUID } from 'crypto';

@Injectable()
export class ContactService {
  constructor(private readonly contactRepository: ContactRepository) {}

  create(createContactDto: CreateContactDTO) {
    return this.contactRepository.create(createContactDto);
  }

  findAll() {
    return this.contactRepository.findAll();
  }

  findOne(id: UUID) {
    return this.contactRepository.findOne(id);
  }

  update(id: UUID, updateContactDto: UpdateContactDTO) {
    return this.contactRepository.update(id, updateContactDto);
  }

  validateTestimonial(id: UUID) {
    return this.contactRepository.validateTestimonial(id);
  }

  remove(id: UUID) {
    return this.contactRepository.remove(id);
  }
}
