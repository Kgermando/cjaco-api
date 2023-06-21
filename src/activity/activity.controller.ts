import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Activity } from './models/activity.entity';
import { ActivityCreateDto } from './models/activity-create.dto';
import { ActivityUpdateDto } from './models/activity-update.dto';

@Controller('activity')
export class ActivityController {
    constructor(private activityService: ActivityService) {}

    @Get()
    async all(
      @Query('page') page: number = 1
    ) {
      return await this.activityService.paginate(page);
    }
  
    @Post()
    async create(@Body() body: ActivityCreateDto): Promise<Activity> {
      return this.activityService.create(body);
    }
  
    @Get(':id')
    async get(@Param('id') id: number) {
      return this.activityService.findOne({where: {id}});
    }
  
    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: ActivityUpdateDto
    ) {
        await this.activityService.update(id, body); 
        return this.activityService.findOne({where: {id}});
    }
  
    @Delete(':id')
    async delete(
        @Param('id') id: number
    ) {
        return this.activityService.delete(id);
    }
}
