"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadedImages = void 0;
const common_1 = require("@nestjs/common");
const UploadedImages = () => {
    return (0, common_1.UploadedFiles)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
            new common_1.FileTypeValidator({ fileType: '.(jpg|jpeg|png)' }),
        ],
    }));
};
exports.UploadedImages = UploadedImages;
//# sourceMappingURL=upload-images.decorator.js.map