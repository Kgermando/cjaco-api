import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Events } from './models/events.entity';

@Injectable()
export class EventsService extends AbstractService {
    constructor(
        @InjectRepository(Events) private readonly  eventsRepository: Repository<Events>
    ) {
        super(eventsRepository); 
    }
}
 