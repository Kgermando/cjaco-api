import { Module } from '@nestjs/common';
import { AnimateurService } from './animateur.service';
import { AnimateurController } from './animateur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { Animateur } from './models/animateur.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Animateur]),
    CommonModule,
  ],
  providers: [AnimateurService],
  controllers: [AnimateurController]
})
export class AnimateurModule {}
