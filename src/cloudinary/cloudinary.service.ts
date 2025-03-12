/* eslint-disable @typescript-eslint/no-require-imports */
import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import {
  CloudinaryResponse,
  CloudinarySecureResponse,
} from './cloudinary-response';
const streamifier = require('streamifier');

@Injectable()
export class CloudinaryService {
  uploadFile(file: Express.Multer.File): Promise<CloudinarySecureResponse> {
    return new Promise<CloudinarySecureResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        (error, result: CloudinaryResponse) => {
          if (error) return reject(error);
          if (result && 'secure_url' in result) {
            return resolve({ secure_url: result.secure_url });
          }
          reject(new Error('No se encontró secure_url en la respuesta'));
        },
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }

  uploadFiles(
    files: Express.Multer.File[],
  ): Promise<CloudinarySecureResponse[]> {
    return Promise.all(files.map((file) => this.uploadFile(file)));
  }
}
