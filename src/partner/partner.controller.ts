import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { Partner } from './models/partner.entity';
import { PartnerUpdateDto } from './models/partner-update.dto';
import { PartnerCreateDto } from './models/partner-create.dto';

@Controller('partners')
export class PartnerController {
    constructor(private partnerService: PartnerService) {}

    @Get('all')
    async allData() {
      return await this.partnerService.all();
    }

    @Get()
    async all(
      @Query('page') page: number = 1
    ) {
      return await this.partnerService.paginate(page);
    }
  
    @Post()
    async create(@Body() body: PartnerCreateDto): Promise<Partner> {
      return this.partnerService.create(body);
    }
  
    @Get(':id')
    async get(@Param('id') id: number) {
      return this.partnerService.findOne({where: {id}});
    }
  
    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: PartnerUpdateDto
    ) {
        await this.partnerService.update(id, body); 
        return this.partnerService.findOne({where: {id}});
    }
  
    @Delete(':id')
    async delete(
        @Param('id') id: number
    ) {
        return this.partnerService.delete(id);
    }
}
