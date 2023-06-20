import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { Contact } from './models/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contact]),
    CommonModule,
  ],
  providers: [ContactService],
  controllers: [ContactController]
})
export class ContactModule {}
