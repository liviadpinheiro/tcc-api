import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDTO } from './dto/create-contact.dto';
import { UUID } from 'crypto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() createContactDto: CreateContactDTO) {
    return this.contactService.create(createContactDto);
  }

  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @Get('testimonials')
  findTestimonials() {
    return this.contactService.findTestimonials();
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.contactService.findOne(id);
  }

  @Patch('/validate-testimonial/:id')
  validateTestimonial(@Param('id') id: UUID) {
    return this.contactService.validateTestimonial(id);
  }
}
