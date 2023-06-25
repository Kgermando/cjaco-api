import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './models/contact.entity';
import { ContactCreateDto } from './models/contact-create.dto';
import { ContactUpdateDto } from './models/contact-update';

@Controller('contacts')
export class ContactController {
    constructor(private contactService: ContactService) {}

    @Get()
    async allData() {
      return await this.contactService.all();
    }

    @Get()
    async all(
      @Query('page') page: number = 1
    ) {
      return await this.contactService.paginate(page);
    }
  
    @Post()
    async create(@Body() body: ContactCreateDto): Promise<Contact> {
      return this.contactService.create(body);
    }
  
    @Get(':id')
    async get(@Param('id') id: number) {
      return this.contactService.findOne({where: {id}});
    }
  
    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: ContactUpdateDto
    ) {
        await this.contactService.update(id, body); 
        return this.contactService.findOne({where: {id}});
    }
  
    @Delete(':id')
    async delete(
        @Param('id') id: number
    ) {
        return this.contactService.delete(id);
    }
}
