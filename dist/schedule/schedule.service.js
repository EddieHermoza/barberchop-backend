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
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const appointments_service_1 = require("../appointments/appointments.service");
const schedule_constants_1 = require("./constants/schedule.constants");
const slot_utils_1 = require("./helpers/slot-utils");
let ScheduleService = class ScheduleService {
    constructor(appointmentsService) {
        this.appointmentsService = appointmentsService;
    }
    findAll() {
        return `This action returns all schedule`;
    }
    findOne(id) {
        return `This action returns a #${id} schedule`;
    }
    remove(id) {
        return `This action removes a #${id} schedule`;
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
        const appointments = await this.appointmentsService.findAppointmentsByBarber(barberId, date);
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
exports.ScheduleService = ScheduleService;
exports.ScheduleService = ScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [appointments_service_1.AppointmentsService])
], ScheduleService);
//# sourceMappingURL=schedule.service.js.map