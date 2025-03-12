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
exports.CreateProductDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class CreateProductDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, description: { required: true, type: () => String }, category: { required: true, type: () => Object }, img: { required: true, type: () => String }, orderLimit: { required: true, type: () => Number }, discount: { required: true, type: () => Number }, price: { required: true, type: () => Number }, isActive: { required: true, type: () => Boolean } };
    }
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.ProductCategory }),
    (0, class_validator_1.IsEnum)(client_1.ProductCategory),
    __metadata("design:type", String)
], CreateProductDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "img", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "orderLimit", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "discount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "isActive", void 0);
//# sourceMappingURL=create-product.dto.js.map