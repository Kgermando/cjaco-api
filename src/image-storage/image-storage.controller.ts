import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'; 
import { ImageStorageService } from './image-storage.service';
import { UploadedMulterFileI } from './data-aws.dto';

@Controller('storage')
export class ImageStorageController {
    constructor(
        private readonly doSpacesService: ImageStorageService,
      ) {}
    
      @UseInterceptors(FileInterceptor('file'))
      @Post('spaces')
      async uploadFile(@UploadedFile() file: UploadedMulterFileI) {
        const url = await this.doSpacesService.uploadFile(file);
        return {
          url,
        };
      }
}
