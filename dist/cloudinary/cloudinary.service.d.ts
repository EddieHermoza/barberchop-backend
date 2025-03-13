export declare class CloudinaryService {
    private uploadFile;
    uploadImages(files: Express.Multer.File[]): Promise<string[]>;
    uploadImage(file: Express.Multer.File): Promise<string>;
}
