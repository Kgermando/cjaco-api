import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EventsService } from './events.service';
import { Events } from './models/events.entity';
import { EventsCreateDto } from './models/events-create.dto';
import { EventsUpdateDto } from './models/events-update.dto';

@Controller('events')
export class EventsController {

  constructor(private eventsService: EventsService) {}

  @Get()
  async all() {
    return this.eventsService.all();
  }

  @Post()
  async create(@Body() body: EventsCreateDto): Promise<Events> {
    return this.eventsService.create(body);
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    return this.eventsService.findOne({where: {id}});
  }

  @Put(':id')
  async update(
      @Param('id') id: number,
      @Body() body: EventsUpdateDto
  ) {
      await this.eventsService.update(id, body); 
      return this.eventsService.findOne({where: {id}});
  }

  @Delete(':id')
  async delete(
      @Param('id') id: number
  ) {
      return this.eventsService.delete(id);
  }
}
