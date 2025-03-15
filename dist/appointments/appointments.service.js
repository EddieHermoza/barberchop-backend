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
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const services_service_1 = require("../services/services.service");
const users_service_1 = require("../users/users.service");
const date_fns_1 = require("date-fns");
const slot_utils_1 = require("./helpers/slot-utils");
const schedule_constants_1 = require("./constants/schedule.constants");
let AppointmentsService = class AppointmentsService {
    constructor(db, servicesService, usersService) {
        this.db = db;
        this.servicesService = servicesService;
        this.usersService = usersService;
    }
    async create(createAppointmentDto) {
        const { customerId, serviceId, barberId } = createAppointmentDto;
        try {
            const service = await this.servicesService.findOne(serviceId);
            const Customer = await this.usersService.findCustomer(customerId);
            const { Barber } = await this.usersService.findBarber(barberId);
            if (!service.isActive)
                throw new common_1.NotFoundException('El servicio no esta disponible');
            if (!Customer.isActive)
                throw new common_1.NotFoundException('El cliente no esta habilitado');
            if (!Barber.isActive)
                throw new common_1.NotFoundException('El barbero no esta habilitado');
            const newAppointment = await this.db.appointment.create({
                data: createAppointmentDto,
            });
            return newAppointment;
        }
        catch (error) {
            throw error;
        }
    }
    async findAll({ limit, page, from_date, status, to_date, }) {
        const pages = page || 1;
        const skip = (pages - 1) * limit;
        return await this.db.appointment.findMany({
            where: {
                scheduledAt: {
                    ...(from_date ? { gte: from_date } : {}),
                    ...(to_date ? { lte: to_date } : {}),
                },
                ...(status ? { status: status } : {}),
                isArchived: false,
            },
            take: limit,
            skip: skip,
        });
    }
    async findOne(id) {
        const appointment = await this.db.appointment.findFirst({
            where: {
                id,
                isArchived: false,
            },
        });
        if (!appointment)
            throw new common_1.NotFoundException('No se encontro la cita');
        return appointment;
    }
    async update(id, updateAppointmentDto) {
        try {
            const updatedAppointment = await this.db.appointment.update({
                where: {
                    id,
                    isArchived: false,
                },
                data: updateAppointmentDto,
            });
            return updatedAppointment;
        }
        catch (error) {
            if (error.code === 'P2025')
                throw new common_1.NotFoundException('No se encontró la cita');
            throw error;
        }
    }
    async remove(id) {
        try {
            const arhivedAppointment = await this.db.appointment.update({
                where: {
                    id,
                },
                data: {
                    isArchived: true,
                },
            });
            if (arhivedAppointment)
                return { message: `La cita con el ID ${id} fue archivada` };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`La cita del id ${id} no existe`);
            }
            throw error;
        }
    }
    async findAppointmentsByDay(date) {
        const start = (0, date_fns_1.startOfDay)(date);
        const end = (0, date_fns_1.endOfDay)(date);
        const appointments = await this.db.appointment.findMany({
            where: {
                scheduledAt: {
                    gte: start,
                    lt: end,
                },
                isArchived: false,
            },
        });
        return appointments;
    }
    async findAppointmentsToday() {
        const now = new Date();
        const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
        const tomorrow = new Date(today);
        tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
        const appointments = await this.db.appointment.findMany({
            where: {
                scheduledAt: {
                    gte: today,
                    lt: tomorrow,
                },
                isArchived: false,
            },
        });
        return appointments;
    }
    async findAppointmentsByBarber(id) {
        const appointments = await this.db.appointment.findMany({
            where: {
                barberId: id,
                isArchived: false,
            },
        });
        return appointments;
    }
    async findAppointmentsByUser(id) {
        const appointments = await this.db.appointment.findMany({
            where: {
                customerId: id,
                isArchived: false,
            },
        });
        return appointments;
    }
    async updateStatus(id, status) {
        try {
            const updatedAppointment = await this.db.appointment.update({
                where: {
                    id,
                    isArchived: false,
                },
                data: {
                    status,
                },
            });
            return updatedAppointment;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`La cita del id ${id} no existe`);
            }
            throw error;
        }
    }
    async getAvailability(barberId, date) {
        const queryDate = new Date(date);
        const allSlots = [];
        schedule_constants_1.SCHEDULE_BLOCKS.forEach((block) => {
            const blockStart = new Date(queryDate);
            blockStart.setHours(block.startHour, 0, 0, 0);
            const blockEnd = new Date(queryDate);
            blockEnd.setHours(block.endHour, 0, 0, 0);
            const slots = (0, slot_utils_1.generateSlots)(blockStart, blockEnd);
            allSlots.push(...slots);
        });
        const dayStart = (0, date_fns_1.startOfDay)(queryDate);
        const dayEnd = (0, date_fns_1.endOfDay)(queryDate);
        const appointments = await this.db.appointment.findMany({
            where: {
                barberId,
                scheduledAt: {
                    gte: dayStart,
                    lt: dayEnd,
                },
                isArchived: false,
            },
        });
        const reservedSet = new Set();
        appointments.forEach((app) => {
            const startTime = new Date(app.scheduledAt);
            const sessionEnd = new Date(startTime.getTime() + schedule_constants_1.SESSION_DURATION * 60000);
            const reservedRange = `${(0, slot_utils_1.formatTime)(startTime)} - ${(0, slot_utils_1.formatTime)(sessionEnd)}`;
            reservedSet.add(reservedRange);
        });
        allSlots.forEach((slot) => {
            if (reservedSet.has(slot.range)) {
                slot.available = false;
            }
        });
        return { slots: allSlots };
    }
};
exports.AppointmentsService = AppointmentsService;
exports.AppointmentsService = AppointmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        services_service_1.ServicesService,
        users_service_1.UsersService])
], AppointmentsService);
//# sourceMappingURL=appointments.service.js.map