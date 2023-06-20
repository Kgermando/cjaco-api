import { Module } from '@nestjs/common';
import { NewletterService } from './newletter.service';
import { NewletterController } from './newletter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { NewsLetter } from './models/newsletter.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([NewsLetter]),
    CommonModule,
  ],
  providers: [NewletterService],
  controllers: [NewletterController]
})
export class NewletterModule {}
