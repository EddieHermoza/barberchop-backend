"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
const streamifier = require('streamifier');
let CloudinaryService = class CloudinaryService {
    uploadFile(file) {
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary_1.v2.uploader.upload_stream((error, result) => {
                if (error)
                    return reject(error);
                if (result && 'secure_url' in result) {
                    return resolve({ secure_url: result.secure_url });
                }
                reject(new Error('No se encontró secure_url en la respuesta'));
            });
            streamifier.createReadStream(file.buffer).pipe(uploadStream);
        });
    }
    async uploadImages(files) {
        let images = [];
        if (files && files.length > 0) {
            const uploadedImages = await Promise.all(files.map((file) => this.uploadFile(file)));
            const urls = uploadedImages.map((img) => img.secure_url);
            images = urls;
        }
        return images;
    }
    async uploadImage(file) {
        let image = '';
        if (file) {
            const uploadedImage = await this.uploadFile(file);
            image = uploadedImage.secure_url;
        }
        return image;
    }
};
exports.CloudinaryService = CloudinaryService;
exports.CloudinaryService = CloudinaryService = __decorate([
    (0, common_1.Injectable)()
], CloudinaryService);
//# sourceMappingURL=cloudinary.service.js.map