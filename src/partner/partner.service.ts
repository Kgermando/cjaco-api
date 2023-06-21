import { Injectable } from '@nestjs/common';
import { AbstractService } from 'src/common/abstract.service';
import { Partner } from './models/partner.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PartnerService extends AbstractService {
    constructor(
        @InjectRepository(Partner) private readonly  partnerRepository: Repository<Partner>
    ) {
        super(partnerRepository); 
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
 
