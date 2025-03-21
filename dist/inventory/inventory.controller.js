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
exports.InventoryController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const inventory_service_1 = require("./inventory.service");
const create_movement_dto_1 = require("./dto/create-movement.dto");
const validate_id_pipe_1 = require("../common/pipes/validate-id.pipe");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const swagger_1 = require("@nestjs/swagger");
const search_status_query_dto_1 = require("../common/dto/search-status-query.dto");
const movement_query_dto_1 = require("./dto/movement-query.dto");
const public_decorator_1 = require("../common/decorators/public.decorator");
const product_category_query_dto_1 = require("./dto/product-category-query.dto");
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    findAvailaibleProducts(params) {
        return this.inventoryService.findAvailaibleProducts(params);
    }
    findAll(params) {
        return this.inventoryService.findAllProductsInventory(params);
    }
    create(createMovementDto) {
        return this.inventoryService.createMovement(createMovementDto);
    }
    findAllMovements(params) {
        return this.inventoryService.findAllMovements(params);
    }
    findOne(id) {
        return this.inventoryService.findOneMovement(id);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Get)('/get-availaible-products'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_category_query_dto_1.ProductCategoryQueryDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findAvailaibleProducts", null);
__decorate([
    (0, common_1.Get)('/get-inventory'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_status_query_dto_1.SearchStatusQueryDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/movements'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movement_dto_1.CreateMovementDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/movements'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movement_query_dto_1.MovementQueryDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findAllMovements", null);
__decorate([
    (0, common_1.Get)('/movements/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findOne", null);
exports.InventoryController = InventoryController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, auth_decorator_1.Auth)(['ADMINISTRADOR']),
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
//# sourceMappingURL=inventory.controller.js.map