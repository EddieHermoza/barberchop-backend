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
exports.AppointmentPaymentQueryDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const paginated_query_dto_1 = require("../../common/dto/paginated-query.dto");
class AppointmentPaymentQueryDto extends paginated_query_dto_1.PaginatedQueryDto {
    constructor() {
        super(...arguments);
        this.payment = null;
        this.status = null;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { payment: { required: false, type: () => Object, nullable: true, default: null }, status: { required: false, type: () => Object, nullable: true, default: null } };
    }
}
exports.AppointmentPaymentQueryDto = AppointmentPaymentQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de pago',
        enum: client_1.PaymentMethod,
        example: 'EFECTIVO',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.PaymentMethod, {
        message: 'el parámetro payment debe ser uno de los siguientes valores : EFECTIVO,YAPE, PLIN, TARJETA',
    }),
    __metadata("design:type", String)
], AppointmentPaymentQueryDto.prototype, "payment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado del Pago',
        enum: client_1.Status,
        example: 'PENDIENTE',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.Status, {
        message: 'el parámetro status debe ser uno de los siguientes valores : PENDIENTE,COMPLETADO,CANCELADO',
    }),
    __metadata("design:type", String)
], AppointmentPaymentQueryDto.prototype, "status", void 0);
//# sourceMappingURL=appointmentPayment-query.dto.js.map