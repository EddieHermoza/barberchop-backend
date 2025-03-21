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
exports.PaginatedQueryDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class PaginatedQueryDto {
    constructor() {
        this.limit = 10;
        this.page = 1;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { limit: { required: true, type: () => Number, default: 10, minimum: 1 }, page: { required: true, type: () => Number, default: 1, minimum: 1 } };
    }
}
exports.PaginatedQueryDto = PaginatedQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Cantidad de resultados por página',
        example: 10,
        default: 10,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1, { message: 'El límite debe ser al menos 1' }),
    (0, class_transformer_1.Transform)(({ value }) => (value ? parseInt(value, 10) : 10)),
    __metadata("design:type", Number)
], PaginatedQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Número de página',
        example: 1,
        default: 1,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1, { message: 'La página debe ser al menos 1' }),
    (0, class_transformer_1.Transform)(({ value }) => (value ? parseInt(value, 10) : 1)),
    __metadata("design:type", Number)
], PaginatedQueryDto.prototype, "page", void 0);
//# sourceMappingURL=paginated-query.dto.js.map