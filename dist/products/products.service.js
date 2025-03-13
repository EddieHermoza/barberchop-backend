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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let ProductsService = class ProductsService {
    constructor(db, cloudinaryService) {
        this.db = db;
        this.cloudinaryService = cloudinaryService;
    }
    async create(createProductDto, file) {
        createProductDto.img = await this.cloudinaryService.uploadImage(file);
        return await this.db.product.create({
            data: createProductDto,
        });
    }
    async findAll({ limit, page, status, query }) {
        const pages = page || 1;
        const skip = (pages - 1) * limit;
        return await this.db.product.findMany({
            select: {
                id: true,
                created: true,
                updated: true,
                name: true,
                description: true,
                img: true,
                price: true,
                discount: true,
                orderLimit: true,
                isActive: true,
            },
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
        const product = await this.db.product.findFirst({
            where: {
                id,
                isArchived: false,
            },
        });
        if (!product)
            throw new common_1.NotFoundException(`El producto del id ${id} no existe`);
        return product;
    }
    async update(id, updateProductDto, file) {
        updateProductDto.img = await this.cloudinaryService.uploadImage(file);
        try {
            const updatedProduct = await this.db.product.update({
                where: {
                    id,
                    isArchived: false,
                },
                data: updateProductDto,
            });
            return updatedProduct;
        }
        catch (error) {
            if (error.code === 'P2025')
                throw new common_1.NotFoundException(`El producto del id ${id} no existe`);
            throw error;
        }
    }
    async remove(id) {
        try {
            const archivedProduct = await this.db.product.update({
                where: {
                    id,
                },
                data: {
                    isActive: false,
                    isArchived: true,
                },
            });
            if (archivedProduct)
                return { message: `El producto con el ID ${id} fue archivado` };
        }
        catch (error) {
            if (error.code === 'P2025')
                throw new common_1.NotFoundException(`El producto del id ${id} no existe`);
            throw error;
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        cloudinary_service_1.CloudinaryService])
], ProductsService);
//# sourceMappingURL=products.service.js.map