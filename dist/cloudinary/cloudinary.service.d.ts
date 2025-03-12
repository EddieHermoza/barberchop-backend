import { CloudinarySecureResponse } from './interfaces/cloudinary-response.interface';
export declare class CloudinaryService {
    uploadFile(file: Express.Multer.File): Promise<CloudinarySecureResponse>;
    uploadFiles(files: Express.Multer.File[]): Promise<any[]>;
}
