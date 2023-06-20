import { Module } from '@nestjs/common';
import { TestmonialService } from './testmonial.service';
import { TestmonialController } from './testmonial.controller';
import { CommonModule } from 'src/common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testmonial } from './models/testmonial.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Testmonial]),
    CommonModule,
  ],
  providers: [TestmonialService],
  controllers: [TestmonialController]
})
export class TestmonialModule {}
