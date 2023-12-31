import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AnimateurService } from './animateur.service';
import { Animateur } from './models/animateur.entity';
import { AnimateurCreateDto } from './models/aniateur-create.dto';
import { AnimateurUpdateDto } from './models/animateur-update.dto';

@Controller('animateurs')
export class AnimateurController {

  constructor(private animateurService: AnimateurService) {}

  @Get('all')
    async allData() {
      return await this.animateurService.all();
    }


  @Get()
  async all(
    @Query('page') page: number = 1
  ) {
    return await this.animateurService.paginate(page);
  }

  
  @Post()
  async create(@Body() body: AnimateurCreateDto): Promise<Animateur> {
    return this.animateurService.create(body);
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    return this.animateurService.findOne({where: {id}});
  }

  @Put(':id')
  async update(
      @Param('id') id: number,
      @Body() body: AnimateurUpdateDto
  ) {
      await this.animateurService.update(id, body); 
      return this.animateurService.findOne({where: {id}});
  }

  @Delete(':id')
  async delete(
      @Param('id') id: number
  ) {
      return this.animateurService.delete(id);
  }
}
