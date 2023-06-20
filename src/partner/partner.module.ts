import { Module } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { Partner } from './models/partner.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Partner]),
    CommonModule,
  ],
  providers: [PartnerService],
  controllers: [PartnerController]
})
export class PartnerModule {}
