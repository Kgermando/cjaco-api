import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { Events } from './models/events.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Events]),
    CommonModule,
  ],
  providers: [EventsService],
  controllers: [EventsController]
})
export class EventsModule {}
