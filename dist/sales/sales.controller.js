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
exports.SalesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const sales_service_1 = require("./sales.service");
const create_sale_dto_1 = require("./dto/create-sale.dto");
const validate_id_pipe_1 = require("../common/pipes/validate-id.pipe");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const client_1 = require("@prisma/client");
const user_session_decorator_1 = require("../common/decorators/user-session.decorator");
const swagger_1 = require("@nestjs/swagger");
const search_query_dto_1 = require("../common/dto/search-query.dto");
let SalesController = class SalesController {
    constructor(salesService) {
        this.salesService = salesService;
    }
    create(user, createSaleDto) {
        createSaleDto.customerId = user.id;
        return this.salesService.create(createSaleDto);
    }
    findAll(params) {
        return this.salesService.findAll(params);
    }
    findOne(id) {
        return this.salesService.findOne(id);
    }
    remove(id) {
        return this.salesService.remove(id);
    }
};
exports.SalesController = SalesController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, user_session_decorator_1.UserSession)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_sale_dto_1.CreateSaleDto]),
    __metadata("design:returntype", void 0)
], SalesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_query_dto_1.SearchQueryDto]),
    __metadata("design:returntype", void 0)
], SalesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SalesController.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.Auth)([client_1.UserRole.ADMINISTRADOR]),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SalesController.prototype, "remove", null);
exports.SalesController = SalesController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, auth_decorator_1.Auth)([client_1.UserRole.CLIENTE, client_1.UserRole.ADMINISTRADOR]),
    (0, common_1.Controller)('sales'),
    __metadata("design:paramtypes", [sales_service_1.SalesService])
], SalesController);
//# sourceMappingURL=sales.controller.js.map