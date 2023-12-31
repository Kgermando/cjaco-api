import { readFile, unlink } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectAws } from 'aws-sdk-v3-nest';

@Injectable()
export class ImageService {
    constructor(
        @InjectAws(S3Client) private readonly s3: S3Client,
        private readonly config: ConfigService,
      ) {}

    #logger = new Logger(ImageService.name);
    #isProd = this.config.get<string>('NODE_ENV') === 'production';

    private bucket = this.config.get<string>('IMAGE_S3_BUCKET');
    private region = this.config.get<string>('IMAGE_S3_REGION');
    private basePath = process.cwd();

    private publicBucketUrl = `https://${this.bucket}.${this.region}.digitaloceanspaces.com`;

    async handleImage(file: Express.Multer.File) {
        const bucketFileName = file.filename + extname(file.originalname);
        try {
          const localPath = join(this.basePath, file.path);
    
          if (!this.#isProd) {
            this.#logger.debug('Starting upload for file: ' + file.originalname);
            this.#logger.debug('got bucket name: ' + bucketFileName);
            this.#logger.debug('localPath: ' + localPath);
          }
    
          await this.s3.send(
            new PutObjectCommand({
              ACL: 'public-read',
              Bucket: this.bucket,
              Key: bucketFileName,
              Body: await readFile(localPath),
              Metadata: {
                'Content-Type': file.mimetype,
              },
            }),
          );
    
          if (!this.#isProd) {
            this.#logger.debug('Done uploading to S3. Now removing local cache...');
          }
    
          await unlink(localPath);
    
          if (!this.#isProd) {
            this.#logger.debug('Finished upload of image ' + bucketFileName);
          }
          var urlPath = this.publicBucketUrl + '/' + bucketFileName;
          console.log(`urlPath ${urlPath}`);
          return {
            url : urlPath,
            message: "Successfully uploaded to S3"
          };
        } catch (err: any) {
          this.#logger.error('Error when uploading file to S3: ' + err.stack);
          throw new InternalServerErrorException('Could not send file to S3 ' + err.stack);
        }
      }     
}
