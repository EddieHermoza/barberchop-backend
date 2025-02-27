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
exports.BarbersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let BarbersService = class BarbersService {
    constructor(db) {
        this.db = db;
    }
    async create(createBarberDto) {
        return await this.db.barber.create({
            data: createBarberDto,
        });
    }
    findAll({ limit, page, query, status }) {
        const pages = page || 1;
        const skip = (pages - 1) * limit;
        return this.db.barber.findMany({
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
        const barber = await this.db.barber.findUnique({
            where: {
                id,
                isArchived: false,
            },
        });
        if (!barber) {
            throw new common_1.NotFoundException(`El barbero del id ${id} no existe`);
        }
        return barber;
    }
    async update(id, updateBarberDto) {
        try {
            const updateBarber = await this.db.barber.update({
                where: {
                    id,
                    isArchived: false,
                },
                data: updateBarberDto,
            });
            return updateBarber;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`El barbero del id ${id} no existe`);
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            const deleteBarber = await this.db.barber.update({
                where: {
                    id,
                },
                data: {
                    isActive: false,
                    isArchived: true,
                },
            });
            return deleteBarber;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`El barbero del id ${id} no existe`);
            }
            throw error;
        }
    }
};
exports.BarbersService = BarbersService;
exports.BarbersService = BarbersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BarbersService);
//# sourceMappingURL=barbers.service.js.map