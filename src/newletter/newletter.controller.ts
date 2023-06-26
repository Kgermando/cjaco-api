import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { NewletterService } from './newletter.service';
import { NewsLetter } from './models/newsletter.entity';
import { NewsLetterCreateDto } from './models/newsletter-create.dto';
import { NewsLetterUpdateDto } from './models/newsletter-update.dto';

@Controller('newletters')
export class NewletterController {
    constructor(private newletterService: NewletterService) {}

    @Get('all')
    async allData() {
      return await this.newletterService.all();
    }

    @Get()
    async all(
      @Query('page') page: number = 1
    ) {
      return await this.newletterService.paginate(page);
    }
  
    @Post()
    async create(@Body() body: NewsLetterCreateDto): Promise<NewsLetter> {
      return this.newletterService.create(body);
    }
  
    @Get(':id')
    async get(@Param('id') id: number) {
      return this.newletterService.findOne({where: {id}});
    }
  
    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: NewsLetterUpdateDto
    ) {
        await this.newletterService.update(id, body); 
        return this.newletterService.findOne({where: {id}});
    }
  
    @Delete(':id')
    async delete(
        @Param('id') id: number
    ) {
        return this.newletterService.delete(id);
    }
}
