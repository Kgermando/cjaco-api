import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Testmonial } from './models/testmonial.entity';

@Injectable()
export class TestmonialService extends AbstractService {
    constructor(
        @InjectRepository(Testmonial) private readonly  testmonialsRepository: Repository<Testmonial>
    ) {
        super(testmonialsRepository); 
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