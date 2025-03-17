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
exports.UsersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const bcrypt = require("bcryptjs");
const validate_id_pipe_1 = require("../common/pipes/validate-id.pipe");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const swagger_1 = require("@nestjs/swagger");
const search_status_query_dto_1 = require("../common/dto/search-status-query.dto");
const create_client_dto_1 = require("./dto/create-client.dto");
const create_barber_dto_1 = require("./dto/create-barber.dto");
const create_admin_dto_1 = require("./dto/create-admin.dto");
const update_admin_dto_1 = require("./dto/update-admin.dto");
const update_barber_dto_1 = require("./dto/update-barber.dto");
const update_client_dto_1 = require("./dto/update-client.dto");
const file_interceptor_decorator_1 = require("../common/decorators/file-interceptor.decorator");
const upload_images_decorator_1 = require("../cloudinary/decorators/upload-images.decorator");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async createCustomer(createClientDto) {
        const hash = await bcrypt.hash(createClientDto.password, 10);
        const UserDto = { ...createClientDto, password: hash };
        return this.usersService.createCustomerUser(UserDto);
    }
    async createBarber(createBarberDto, file) {
        const hash = await bcrypt.hash(createBarberDto.password, 10);
        const UserDto = { ...createBarberDto, password: hash };
        return this.usersService.createBarberUser(UserDto, file);
    }
    async createAdmin(createAdminDto) {
        const hash = await bcrypt.hash(createAdminDto.password, 10);
        const UserDto = { ...createAdminDto, password: hash };
        return this.usersService.createAdminUser(UserDto);
    }
    findAllCustomers(params) {
        return this.usersService.findAll('CLIENTE', params);
    }
    findAllAdmins(params) {
        return this.usersService.findAll('ADMINISTRADOR', params);
    }
    findAllBarbers(params) {
        return this.usersService.findAll('BARBERO', params);
    }
    findOneCustomer(id) {
        return this.usersService.findCustomer(id);
    }
    findOneBarber(id) {
        return this.usersService.findBarber(id);
    }
    findOneAdmin(id) {
        return this.usersService.findAdmin(id);
    }
    findOne(id) {
        return this.usersService.findOne(id);
    }
    updateCustomer(id, updateClientDto) {
        return this.usersService.updateCustomer(id, updateClientDto);
    }
    updateBarber(id, updateBarberDto, file) {
        return this.usersService.updateBarber(id, updateBarberDto, file);
    }
    updateAdmin(id, UpdateAdminDto) {
        return this.usersService.updateAdmin(id, UpdateAdminDto);
    }
    remove(id) {
        return this.usersService.remove(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('/create-customer'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_dto_1.CreateClientDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createCustomer", null);
__decorate([
    (0, file_interceptor_decorator_1.UseFileInterceptor)(),
    (0, common_1.Post)('/create-barber'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, upload_images_decorator_1.UploadedImage)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_barber_dto_1.CreateBarberDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createBarber", null);
__decorate([
    (0, common_1.Post)('/create-admin'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createAdmin", null);
__decorate([
    (0, common_1.Get)('/get-customers'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_status_query_dto_1.SearchStatusQueryDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAllCustomers", null);
__decorate([
    (0, common_1.Get)('/get-admins'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_status_query_dto_1.SearchStatusQueryDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAllAdmins", null);
__decorate([
    (0, common_1.Get)('/get-barbers'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_status_query_dto_1.SearchStatusQueryDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAllBarbers", null);
__decorate([
    (0, common_1.Get)('/get-customer/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOneCustomer", null);
__decorate([
    (0, common_1.Get)('/get-barber/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOneBarber", null);
__decorate([
    (0, common_1.Get)('/get-admin/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOneAdmin", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/update-customer'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_client_dto_1.UpdateClientDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateCustomer", null);
__decorate([
    (0, file_interceptor_decorator_1.UseFileInterceptor)(),
    (0, common_1.Patch)(':id/update-barber'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, upload_images_decorator_1.UploadedImage)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_barber_dto_1.UpdateBarberDto, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateBarber", null);
__decorate([
    (0, common_1.Patch)(':id/update-admin'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_admin_dto_1.UpdateAdminDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateAdmin", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, auth_decorator_1.Auth)(['ADMINISTRADOR']),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map