import {
    Controller,
    Get,
    Logger,
    Param,
    Post,
    Res,
    UploadedFile,
    UploadedFiles,
    UseGuards,
    UseInterceptors,
  } from '@nestjs/common';
  import { ImageService } from './image.service';
  import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express'; 
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
    @UseInterceptors(FilesInterceptor('image'))
    async uploadFiles(@UploadedFiles() files: Express.Multer.File[] = []) {
      if (!this.isProd) {
        this.#logger.debug(
          'Got these files: ' + JSON.stringify(files, undefined, 2),
        );
      }
      return Promise.all(files.map((f) => this.imageService.handleImage(f))); 
    }
    
}
