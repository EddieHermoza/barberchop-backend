"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsModule = void 0;
const common_1 = require("@nestjs/common");
const appointments_service_1 = require("./appointments.service");
const appointments_controller_1 = require("./appointments.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const services_module_1 = require("../services/services.module");
const barbers_module_1 = require("../barbers/barbers.module");
const users_module_1 = require("../users/users.module");
const barbers_service_1 = require("../barbers/barbers.service");
const users_service_1 = require("../users/users.service");
const services_service_1 = require("../services/services.service");
let AppointmentsModule = class AppointmentsModule {
};
exports.AppointmentsModule = AppointmentsModule;
exports.AppointmentsModule = AppointmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [services_module_1.ServicesModule, barbers_module_1.BarbersModule, users_module_1.UsersModule],
        exports: [appointments_service_1.AppointmentsService],
        controllers: [appointments_controller_1.AppointmentsController],
        providers: [
            appointments_service_1.AppointmentsService,
            barbers_service_1.BarbersService,
            users_service_1.UsersService,
            services_service_1.ServicesService,
            prisma_service_1.PrismaService,
        ],
    })
], AppointmentsModule);
//# sourceMappingURL=appointments.module.js.map