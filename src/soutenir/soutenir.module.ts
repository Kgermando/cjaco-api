import { Module } from '@nestjs/common';
import { SoutenirService } from './soutenir.service';
import { SoutenirController } from './soutenir.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { Soutenir } from './models/soutenir.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Soutenir]),
    CommonModule,
  ],
  providers: [SoutenirService],
  controllers: [SoutenirController]
})
export class SoutenirModule {}
