import { AppService } from './app.service';
import { CloudinaryService } from './cloudinary/cloudinary.service';
export declare class AppController {
    private readonly appService;
    private readonly cloudinaryService;
    constructor(appService: AppService, cloudinaryService: CloudinaryService);
    getHello(): string;
    uploadImage(files: Express.Multer.File[]): Promise<import("./cloudinary/cloudinary-response").CloudinarySecureResponse[]>;
}
