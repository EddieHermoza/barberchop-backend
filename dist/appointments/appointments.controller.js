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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const appointments_service_1 = require("./appointments.service");
const create_appointment_dto_1 = require("./dto/create-appointment.dto");
const update_appointment_dto_1 = require("./dto/update-appointment.dto");
const validate_id_pipe_1 = require("../common/pipes/validate-id.pipe");
const user_session_decorator_1 = require("../common/decorators/user-session.decorator");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const client_1 = require("@prisma/client");
const swagger_1 = require("@nestjs/swagger");
const validate_date_pipe_1 = require("../common/pipes/validate-date.pipe");
const appointment_query_dto_1 = require("./dto/appointment-query.dto");
let AppointmentsController = class AppointmentsController {
    constructor(appointmentsService) {
        this.appointmentsService = appointmentsService;
    }
    create(user, createAppointmentDto) {
        createAppointmentDto.customerId = user.roleId;
        return this.appointmentsService.create(createAppointmentDto);
    }
    findAll(params) {
        return this.appointmentsService.findAll(params);
    }
    findAllAppointementByDate(date) {
        return this.appointmentsService.findAppointmentsByDay(date);
    }
    findAllAppointmentsToday() {
        return this.appointmentsService.findAppointmentsToday();
    }
    findAllAppointmentsByBarber(barberId) {
        return this.appointmentsService.findAppointmentsByBarber(barberId);
    }
    findAllAppointmentsByUser(userId) {
        return this.appointmentsService.findAppointmentsByCustomer(userId);
    }
    findOne(id) {
        return this.appointmentsService.findOne(id);
    }
    update(id, updateAppointmentDto) {
        return this.appointmentsService.update(id, updateAppointmentDto);
    }
    remove(id) {
        return this.appointmentsService.remove(id);
    }
    confirmAppointment(id) {
        return this.appointmentsService.updateStatus(id, client_1.AppointmentStatus.CONFIRMADA);
    }
    startAppointment(id) {
        return this.appointmentsService.updateStatus(id, client_1.AppointmentStatus.EN_PROCESO);
    }
    cancelAppointment(id) {
        return this.appointmentsService.updateStatus(id, client_1.AppointmentStatus.CANCELADA);
    }
    completeAppointment(id) {
        return this.appointmentsService.updateStatus(id, client_1.AppointmentStatus.COMPLETADA);
    }
};
exports.AppointmentsController = AppointmentsController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, user_session_decorator_1.UserSession)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_appointment_dto_1.CreateAppointmentDto]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [appointment_query_dto_1.AppointmentQueryDto]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/get-appointments-by-day/:date'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('date', validate_date_pipe_1.ValidateDate)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "findAllAppointementByDate", null);
__decorate([
    (0, common_1.Get)('/get-appointments-today'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "findAllAppointmentsToday", null);
__decorate([
    (0, common_1.Get)('/get-appointments-by-barber/:barberId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('barberId', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "findAllAppointmentsByBarber", null);
__decorate([
    (0, common_1.Get)('/get-appointments-by-user/:userId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('userId', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "findAllAppointmentsByUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_appointment_dto_1.UpdateAppointmentDto]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/confirm-appointment'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "confirmAppointment", null);
__decorate([
    (0, common_1.Patch)(':id/start-appointment'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "startAppointment", null);
__decorate([
    (0, common_1.Patch)(':id/cancel-appointment'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "cancelAppointment", null);
__decorate([
    (0, common_1.Patch)(':id/complete-appointment'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppointmentsController.prototype, "completeAppointment", null);
exports.AppointmentsController = AppointmentsController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, auth_decorator_1.Auth)([client_1.UserRole.CLIENTE, client_1.UserRole.BARBERO, client_1.UserRole.ADMINISTRADOR]),
    (0, common_1.Controller)('appointments'),
    __metadata("design:paramtypes", [appointments_service_1.AppointmentsService])
], AppointmentsController);
//# sourceMappingURL=appointments.controller.js.map