import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { Activity } from './models/activity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Activity]),
    CommonModule,
  ],
  providers: [ActivityService],
  controllers: [ActivityController]
})
export class ActivityModule {}
