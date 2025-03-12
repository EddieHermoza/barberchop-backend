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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const appointments_service_1 = require("../appointments/appointments.service");
let PaymentsService = class PaymentsService {
    constructor(db, appointmentsService) {
        this.db = db;
        this.appointmentsService = appointmentsService;
    }
    async create(createPaymentDto) {
        try {
            const payment = await this.db.appointmentPayment.create({
                data: createPaymentDto,
            });
            return payment;
        }
        catch (error) {
            console.log(error);
            throw new Error('Hubo un error en el registro del pago de cita');
        }
    }
    async findAll({ limit, payment, page, status }) {
        const pages = page || 1;
        const skip = (pages - 1) * limit;
        return this.db.appointmentPayment.findMany({
            where: {
                ...(payment ? { method: payment } : {}),
                ...(payment ? { status: status } : {}),
            },
            skip: skip,
            take: limit,
        });
    }
    async findOne(id) {
        const payment = await this.db.appointmentPayment.findUnique({
            where: { id },
        });
        if (!payment) {
            throw new common_1.NotFoundException(`Pago con el ${id} no encontrado`);
        }
        return payment;
    }
    async remove(id) {
        const payment = await this.db.appointmentPayment.findUnique({
            where: { id },
        });
        if (!payment) {
            throw new common_1.NotFoundException(`Pago con el ID ${id} no encontrado`);
        }
        await this.db.appointmentPayment.delete({
            where: { id },
        });
        return { message: `Pago con el ID ${id} fue eliminado` };
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        appointments_service_1.AppointmentsService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map