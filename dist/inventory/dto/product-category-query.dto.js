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
exports.ProductCategoryQueryDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const search_query_dto_1 = require("../../common/dto/search-query.dto");
class ProductCategoryQueryDto extends search_query_dto_1.SearchQueryDto {
    constructor() {
        super(...arguments);
        this.category = null;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { category: { required: false, type: () => Object, nullable: true, default: null } };
    }
}
exports.ProductCategoryQueryDto = ProductCategoryQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Categoría del producto',
        enum: client_1.ProductCategory,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.ProductCategory, {
        message: 'El parámetro de categoría del producto debe ser válido',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductCategoryQueryDto.prototype, "category", void 0);
//# sourceMappingURL=product-category-query.dto.js.map