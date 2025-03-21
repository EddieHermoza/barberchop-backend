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
exports.HaircutsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let HaircutsService = class HaircutsService {
    constructor(db, cloudinaryService) {
        this.db = db;
        this.cloudinaryService = cloudinaryService;
    }
    async create(createHaircutDto, files) {
        createHaircutDto.imgs = await this.cloudinaryService.uploadImages(files);
        return await this.db.haircutType.create({
            data: createHaircutDto,
        });
    }
    async findAll({ limit, page, query, status }) {
        const pages = page || 1;
        const skip = (pages - 1) * limit;
        return this.db.haircutType.findMany({
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
    async findAvailaibleHaircuts({ limit, page, query }) {
        const pages = page || 1;
        const skip = (pages - 1) * limit;
        return this.db.haircutType.findMany({
            where: {
                AND: [
                    query
                        ? { name: { contains: query, mode: client_1.Prisma.QueryMode.insensitive } }
                        : {},
                ],
                isArchived: false,
                isActive: true,
            },
            skip: skip,
            take: limit,
        });
    }
    async findOne(id) {
        const haircut = await this.db.haircutType.findUnique({
            where: {
                id,
                isArchived: false,
            },
        });
        if (!haircut) {
            throw new common_1.NotFoundException(`El corte de cabello del id ${id} no existe`);
        }
        return haircut;
    }
    async update(id, updateHaircutDto, files) {
        const currentHaircut = await this.findOne(id);
        const updatedImages = await this.cloudinaryService.uploadImages(files);
        updateHaircutDto.imgs = [...currentHaircut.imgs, ...(updatedImages || [])];
        try {
            const updateHaircut = await this.db.haircutType.update({
                where: {
                    id,
                    isArchived: false,
                },
                data: updateHaircutDto,
            });
            return updateHaircut;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`El corte de cabello del id ${id} no existe`);
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            const archivedHaircut = await this.db.haircutType.update({
                where: {
                    id,
                },
                data: {
                    isActive: false,
                    isArchived: true,
                },
            });
            if (archivedHaircut)
                return { message: `El corte con el ID ${id} fue archivado` };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`El corte de cabello del id ${id} no existe`);
            }
            throw error;
        }
    }
};
exports.HaircutsService = HaircutsService;
exports.HaircutsService = HaircutsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        cloudinary_service_1.CloudinaryService])
], HaircutsService);
//# sourceMappingURL=haircuts.service.js.map