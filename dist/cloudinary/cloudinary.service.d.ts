import { CloudinarySecureResponse } from './cloudinary-response';
export declare class CloudinaryService {
    uploadFile(file: Express.Multer.File): Promise<CloudinarySecureResponse>;
    uploadFiles(files: Express.Multer.File[]): Promise<CloudinarySecureResponse[]>;
}
