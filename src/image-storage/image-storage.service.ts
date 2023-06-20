import { Inject, Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk'; 
import { DoSpacesServiceLib, UploadedMulterFileI } from './data-aws.dto';


@Injectable()
export class ImageStorageService {
    constructor(@Inject(DoSpacesServiceLib) private readonly s3: AWS.S3) {
 
    }

    async uploadFile(file: UploadedMulterFileI) {
        // Precaution to avoid having 2 files with the same name
    const fileName = `${Date.now()}-${
        file.originalname
    }`;

    // Return a promise that resolves only when the file upload is complete
    return new Promise((resolve, reject) => {
        this.s3.putObject(
        {
            Bucket: process.env.SPACES,
            Key: fileName,
            Body: file.buffer,
            ACL: 'public-read',
        },
        (error: AWS.AWSError) => {
            if (!error) {
            resolve(`https://${process.env.SPACES}.fra1.digitaloceanspaces.com/${fileName}`);
            } else {
            reject(
                new Error(
                `DoSpacesService_ERROR: ${error.message || 'Something went wrong'}`,
                ),
            );
            }
        },
        );
    });
    }
}
