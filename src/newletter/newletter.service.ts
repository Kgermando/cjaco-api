import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { NewsLetter } from './models/newsletter.entity';

@Injectable()
export class NewletterService extends AbstractService {
    constructor(
        @InjectRepository(NewsLetter) private readonly  newsletterRepository: Repository<NewsLetter>
    ) {
        super(newsletterRepository); 
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
