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
exports.CreatePurchaseDto = void 0;
const openapi = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_purchase_item_dto_1 = require("./create-purchase-item.dto");
const swagger_1 = require("@nestjs/swagger");
class CreatePurchaseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => Number }, providerId: { required: true, type: () => Number }, totalAmount: { required: true, type: () => Number }, receiptType: { required: true, type: () => Object }, receiptNumber: { required: true, type: () => String }, receiptDate: { required: true, type: () => Date }, purchaseItems: { required: true, type: () => [require("./create-purchase-item.dto").CreatePurchaseItemDto], minItems: 1 } };
    }
}
exports.CreatePurchaseDto = CreatePurchaseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePurchaseDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePurchaseDto.prototype, "providerId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    __metadata("design:type", Number)
], CreatePurchaseDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.ReceiptType }),
    (0, class_validator_1.IsEnum)(client_1.ReceiptType, {
        message: 'El tipo de comprobante debe ser uno de los siguientes valores: BOLETA, FACTURA.',
    }),
    __metadata("design:type", String)
], CreatePurchaseDto.prototype, "receiptType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePurchaseDto.prototype, "receiptNumber", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreatePurchaseDto.prototype, "receiptDate", void 0);
__decorate([
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_purchase_item_dto_1.CreatePurchaseItemDto),
    __metadata("design:type", Array)
], CreatePurchaseDto.prototype, "purchaseItems", void 0);
//# sourceMappingURL=create-purchase.dto.js.map