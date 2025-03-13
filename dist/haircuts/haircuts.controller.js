"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HaircutsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const haircuts_service_1 = require("./haircuts.service");
const create_haircut_dto_1 = require("./dto/create-haircut.dto");
const update_haircut_dto_1 = require("./dto/update-haircut.dto");
const validate_id_pipe_1 = require("../common/pipes/validate-id.pipe");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../common/decorators/public.decorator");
const search_status_query_dto_1 = require("../common/dto/search-status-query.dto");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const upload_images_decorator_1 = require("../cloudinary/decorators/upload-images.decorator");
const file_interceptor_decorator_1 = require("../common/decorators/file-interceptor.decorator");
let HaircutsController = class HaircutsController {
    constructor(haircutsService, cloudinaryService) {
        this.haircutsService = haircutsService;
        this.cloudinaryService = cloudinaryService;
    }
    create(files, createHaircutDto) {
        return this.haircutsService.create(createHaircutDto, files);
    }
    findAll(params) {
        return this.haircutsService.findAll(params);
    }
    findOne(id) {
        return this.haircutsService.findOne(id);
    }
    update(files, id, updateHaircutDto) {
        return this.haircutsService.update(id, updateHaircutDto, files);
    }
    remove(id) {
        return this.haircutsService.remove(id);
    }
};
exports.HaircutsController = HaircutsController;
__decorate([
    (0, common_1.Post)(),
    (0, file_interceptor_decorator_1.UseFilesInterceptor)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, upload_images_decorator_1.UploadedImages)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, create_haircut_dto_1.CreateHaircutDto]),
    __metadata("design:returntype", void 0)
], HaircutsController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_status_query_dto_1.SearchStatusQueryDto]),
    __metadata("design:returntype", void 0)
], HaircutsController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HaircutsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, file_interceptor_decorator_1.UseFilesInterceptor)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, upload_images_decorator_1.UploadedImages)()),
    __param(1, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Number, update_haircut_dto_1.UpdateHaircutDto]),
    __metadata("design:returntype", void 0)
], HaircutsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HaircutsController.prototype, "remove", null);
exports.HaircutsController = HaircutsController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('haircuts'),
    __metadata("design:paramtypes", [haircuts_service_1.HaircutsService,
        cloudinary_service_1.CloudinaryService])
], HaircutsController);
//# sourceMappingURL=haircuts.controller.js.map