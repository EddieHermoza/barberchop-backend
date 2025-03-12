"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HaircutsModule = void 0;
const common_1 = require("@nestjs/common");
const haircuts_service_1 = require("./haircuts.service");
const haircuts_controller_1 = require("./haircuts.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const cloudinary_module_1 = require("../cloudinary/cloudinary.module");
let HaircutsModule = class HaircutsModule {
};
exports.HaircutsModule = HaircutsModule;
exports.HaircutsModule = HaircutsModule = __decorate([
    (0, common_1.Module)({
        imports: [cloudinary_module_1.CloudinaryModule],
        exports: [haircuts_service_1.HaircutsService],
        controllers: [haircuts_controller_1.HaircutsController],
        providers: [haircuts_service_1.HaircutsService, prisma_service_1.PrismaService],
    })
], HaircutsModule);
//# sourceMappingURL=haircuts.module.js.map