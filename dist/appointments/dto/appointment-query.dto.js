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
exports.AppointmentQueryDto = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const date_fns_1 = require("date-fns");
const paginated_query_dto_1 = require("../../common/dto/paginated-query.dto");
class AppointmentQueryDto extends paginated_query_dto_1.PaginatedQueryDto {
    constructor() {
        super(...arguments);
        this.from_date = null;
        this.to_date = null;
        this.status = null;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { from_date: { required: false, type: () => Date, nullable: true, default: null }, to_date: { required: false, type: () => Date, nullable: true, default: null }, status: { required: false, type: () => Object, nullable: true, default: null } };
    }
}
exports.AppointmentQueryDto = AppointmentQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rango inicial de fechas',
        example: '2025-01-01',
        format: 'yyyy-MM-dd',
        type: 'string',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (!value)
            return null;
        if (value instanceof Date)
            return value;
        const date = (0, date_fns_1.parse)(value, 'yyyy-MM-dd', new Date());
        if (!(0, date_fns_1.isValid)(date)) {
            throw new common_1.BadRequestException(`El parámetro from_date no es una fecha válida. Usa el formato yyyy-MM-dd.`);
        }
        return date;
    }),
    __metadata("design:type", Date)
], AppointmentQueryDto.prototype, "from_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rango final de fechas',
        example: '2025-01-01',
        format: 'yyyy-MM-dd',
        type: 'string',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (!value)
            return null;
        if (value instanceof Date)
            return value;
        const date = (0, date_fns_1.parse)(value, 'yyyy-MM-dd', new Date());
        if (!(0, date_fns_1.isValid)(date)) {
            throw new common_1.BadRequestException(`El parámetro to_date no es una fecha válida. Usa el formato yyyy-MM-dd.`);
        }
        return date;
    }),
    __metadata("design:type", Date)
], AppointmentQueryDto.prototype, "to_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado de la cita',
        enum: client_1.AppointmentStatus,
        example: 'PENDIENTE',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.AppointmentStatus, {
        message: 'el parámetro status debe ser uno de los siguientes valores : PENDIENTE,CONFIRMADA, EN_PROCESO, COMPLETADA O CANCELADA',
    }),
    __metadata("design:type", String)
], AppointmentQueryDto.prototype, "status", void 0);
//# sourceMappingURL=appointment-query.dto.js.map