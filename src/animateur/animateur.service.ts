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

    async paginate(page: number = 1): Promise<any> {
        const {data, meta} = await super.paginate(page);
        
        return {
            data: data.map(user => {
                const {password, ...data} = user;
                return data;
            }),
            meta
        }
    }
}
 
