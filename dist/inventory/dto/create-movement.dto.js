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
exports.CreateMovementDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateMovementDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { productId: { required: true, type: () => Number }, quantity: { required: true, type: () => Number }, notes: { required: true, type: () => String }, type: { required: true, type: () => Object } };
    }
}
exports.CreateMovementDto = CreateMovementDto;
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateMovementDto.prototype, "productId", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateMovementDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMovementDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.MovementType }),
    (0, class_validator_1.IsEnum)(client_1.MovementType, {
        message: 'El tipo de movimiento debe ser uno de los siguientes valores: ENTRADA, SALIDA.',
    }),
    __metadata("design:type", String)
], CreateMovementDto.prototype, "type", void 0);
//# sourceMappingURL=create-movement.dto.js.map