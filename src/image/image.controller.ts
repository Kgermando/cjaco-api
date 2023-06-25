import {
    Controller, 
    Logger, 
    Post, 
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
  import { ImageService } from './image.service';
  import { FileInterceptor } from '@nestjs/platform-express'; 
  import { ConfigService } from '@nestjs/config';

@Controller('image')
export class ImageController {
    constructor(
        private readonly imageService: ImageService,
        private readonly config: ConfigService,
      ) {}

    #logger = new Logger(ImageController.name);
    isProd = this.config.get<string>('NODE_ENV') === 'production';
 

    @Post('upload')
    @UseInterceptors(FileInterceptor('image'))
    uploadFile(@UploadedFile() file) {
      var url_path = this.imageService.handleImage(file);
      return url_path;
    }
    
}
