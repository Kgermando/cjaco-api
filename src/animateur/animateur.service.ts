import { Injectable } from '@nestjs/common';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Animateur } from './models/animateur.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnimateurService extends AbstractService {
    constructor(
        @InjectRepository(Animateur) private readonly  animateurRepository: Repository<Animateur>
    ) {
        super(animateurRepository); 
    }
}
 
