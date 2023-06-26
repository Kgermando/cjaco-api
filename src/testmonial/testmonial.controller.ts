import { Body, Controller, Post, Delete, Get, Param, Put, Query } from '@nestjs/common';
import { TestmonialService } from './testmonial.service';
import { Testmonial } from './models/testmonial.entity';
import { TestmonialCreateDto } from './models/testmonial-create.dto';
import { TestmonialUpdateDto } from './models/testmonial-update.dto';

@Controller('testmonials')
export class TestmonialController {
    constructor(private testmonialService: TestmonialService) {}

    @Get('all')
    async allData() {
      return await this.testmonialService.all();
    }

    @Get()
    async all(
      @Query('page') page: number = 1
    ) {
      return await this.testmonialService.paginate(page);
    }
  
    @Post()
    async create(@Body() body: TestmonialCreateDto): Promise<Testmonial> {
      return this.testmonialService.create(body);
    }
  
    @Get(':id')
    async get(@Param('id') id: number) {
      return this.testmonialService.findOne({where: {id}});
    }
  
    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: TestmonialUpdateDto
    ) {
        await this.testmonialService.update(id, body); 
        return this.testmonialService.findOne({where: {id}});
    }
  
    @Delete(':id')
    async delete(
        @Param('id') id: number
    ) {
        return this.testmonialService.delete(id);
    }  
}
