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
exports.MovementQueryDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const paginated_query_dto_1 = require("../../common/dto/paginated-query.dto");
const client_1 = require("@prisma/client");
class MovementQueryDto extends paginated_query_dto_1.PaginatedQueryDto {
    constructor() {
        super(...arguments);
        this.status = null;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: false, type: () => Object, nullable: true, default: null } };
    }
}
exports.MovementQueryDto = MovementQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de Movimiento',
        enum: client_1.MovementType,
        example: 'ENTRADA',
        default: 'ENTRADA',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.MovementType, {
        message: 'el parámetro status debe ser uno de los siguientes valores : ENTRADA O SALIDA',
    }),
    __metadata("design:type", String)
], MovementQueryDto.prototype, "status", void 0);
//# sourceMappingURL=movement-query.dto.js.map