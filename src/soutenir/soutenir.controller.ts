import { Body, Controller, Post, Delete, Get, Param, Put } from '@nestjs/common';
import { SoutenirService } from './soutenir.service';
import { Soutenir } from './models/soutenir.entity';
import { SoutenirCreateDto } from './models/soutenir-create.dto';
import { SoutenirUpdateDto } from './models/soutenir-update.dto';

@Controller('soutenirs')
export class SoutenirController {
    constructor(private soutenirService: SoutenirService) {}

    @Get()
    async all() {
      return this.soutenirService.all();
    }
  
    @Post()
    async create(@Body() body: SoutenirCreateDto): Promise<Soutenir> {
      return this.soutenirService.create(body);
    }
  
    @Get(':id')
    async get(@Param('id') id: number) {
      return this.soutenirService.findOne({where: {id}});
    }
  
    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: SoutenirUpdateDto
    ) {
        await this.soutenirService.update(id, body); 
        return this.soutenirService.findOne({where: {id}});
    }
  
    @Delete(':id')
    async delete(
        @Param('id') id: number
    ) {
        return this.soutenirService.delete(id);
    }  
}
