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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSaleDto = void 0;
const openapi = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const create_sale_item_dto_1 = require("./create-sale-item.dto");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class CreateSaleDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { transaction: { required: true, type: () => String }, amount: { required: true, type: () => Number }, discount: { required: true, type: () => Number }, totalAmount: { required: true, type: () => Number }, paymentMethod: { required: true, type: () => Object }, status: { required: true, type: () => Object }, saleItems: { required: true, type: () => [require("./create-sale-item.dto").CreateSaleItemDto], minItems: 1 } };
    }
}
exports.CreateSaleDto = CreateSaleDto;
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiHideProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateSaleDto.prototype, "customerId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSaleDto.prototype, "transaction", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    __metadata("design:type", Number)
], CreateSaleDto.prototype, "amount", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    __metadata("design:type", Number)
], CreateSaleDto.prototype, "discount", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    __metadata("design:type", Number)
], CreateSaleDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.PaymentMethod }),
    (0, class_validator_1.IsEnum)(client_1.PaymentMethod),
    __metadata("design:type", String)
], CreateSaleDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.Status }),
    (0, class_validator_1.IsEnum)(client_1.Status),
    __metadata("design:type", String)
], CreateSaleDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_sale_item_dto_1.CreateSaleItemDto),
    __metadata("design:type", Array)
], CreateSaleDto.prototype, "saleItems", void 0);
//# sourceMappingURL=create-sale.dto.js.map