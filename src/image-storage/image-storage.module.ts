import { Module } from '@nestjs/common';
import { ImageStorageService } from './image-storage.service';
import { ImageStorageController } from './image-storage.controller';
import { DoSpacesServicerovider } from './data-aws.dto';

@Module({
  providers: [DoSpacesServicerovider, ImageStorageService],
  controllers: [ImageStorageController], 
})
export class ImageStorageModule {}
