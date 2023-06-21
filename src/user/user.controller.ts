import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { User } from './models/user.entity';
import { UserCreateDto } from './models/user-create.dto';
import { UserUpdateDto } from './models/user-update.dto';

@Controller('users')
export class UserController {

  constructor(
    private userService: UserService,
  ) {}


    @Get()
    async all(
      @Query('page') page: number = 1
    ) {
      return await this.userService.paginate(page);
    } 
    

    @Post()
    async create(@Body() body: UserCreateDto): Promise<User> {
      const password = await bcrypt.hash('@cjaco', 12);
      return this.userService.create({
        ...body,
        password
      });
    }

    @Get(':id')
    async get(@Param('id') id: number) {
      return this.userService.findOne({where: {id}});
    }


  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() body: UserUpdateDto
  ) { 

    await this.userService.update(id, body); 
    return this.userService.findOne({where: {id}});
  }

  @Delete(':id')
  async delete(
    @Param('id') id: number
  ) {
    return this.userService.delete(id);
  }
}
 