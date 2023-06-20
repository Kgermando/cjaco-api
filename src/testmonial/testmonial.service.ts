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
}