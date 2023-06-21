import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Soutenir } from './models/soutenir.entity';

@Injectable()
export class SoutenirService extends AbstractService {
    constructor(
        @InjectRepository(Soutenir) private readonly  soutenirRepository: Repository<Soutenir>
    ) {
        super(soutenirRepository); 
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
