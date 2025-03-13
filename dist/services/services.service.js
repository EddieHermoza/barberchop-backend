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
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let ServicesService = class ServicesService {
    constructor(db, cloudinaryService) {
        this.db = db;
        this.cloudinaryService = cloudinaryService;
    }
    async create(createServiceDto, file) {
        createServiceDto.img = await this.cloudinaryService.uploadImage(file);
        return await this.db.service.create({
            data: createServiceDto,
        });
    }
    findAll({ limit, page, query, status }) {
        const pages = page || 1;
        const skip = (pages - 1) * limit;
        return this.db.service.findMany({
            where: {
                AND: [
                    query
                        ? { name: { contains: query, mode: client_1.Prisma.QueryMode.insensitive } }
                        : {},
                    status !== null && status !== undefined ? { isActive: status } : {},
                ],
                isArchived: false,
            },
            skip: skip,
            take: limit,
        });
    }
    async findOne(id) {
        const service = await this.db.service.findUnique({
            where: {
                id,
                isArchived: false,
            },
        });
        if (!service) {
            throw new common_1.NotFoundException(`El servicio del id ${id} no existe`);
        }
        return service;
    }
    async update(id, updateServiceDto, file) {
        updateServiceDto.img = await this.cloudinaryService.uploadImage(file);
        try {
            const updateService = await this.db.service.update({
                where: {
                    id,
                    isArchived: false,
                },
                data: updateServiceDto,
            });
            return updateService;
        }
        catch (error) {
            if (error.code === 'P2025')
                throw new common_1.NotFoundException(`El servicio del id ${id} no existe`);
            throw error;
        }
    }
    async remove(id) {
        try {
            const archivedService = await this.db.service.update({
                where: {
                    id,
                },
                data: {
                    isActive: false,
                    isArchived: true,
                },
            });
            if (archivedService)
                return { message: `El servicio con el ID ${id} fue archivado` };
        }
        catch (error) {
            if (error.code === 'P2025')
                throw new common_1.NotFoundException(`El servicio del id ${id} no existe`);
            throw error;
        }
    }
};
exports.ServicesService = ServicesService;
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        cloudinary_service_1.CloudinaryService])
], ServicesService);
//# sourceMappingURL=services.service.js.map