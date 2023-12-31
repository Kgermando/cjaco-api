import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Contact } from './models/contact.entity';

@Injectable()
export class ContactService extends AbstractService {
    constructor(
        @InjectRepository(Contact) private readonly  contactRepository: Repository<Contact>
    ) {
        super(contactRepository); 
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
 