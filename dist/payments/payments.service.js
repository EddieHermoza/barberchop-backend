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
        return 'This action adds a new payment';
    }
    async findAll() {
        return `This action returns all payments`;
    }
    async findOne(id) {
        return `This action returns a #${id} payment`;
    }
    async update(id, updatePaymentDto) {
        return `This action updates a #${id} payment`;
    }
    async remove(id) {
        return `This action removes a #${id} payment`;
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        appointments_service_1.AppointmentsService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map