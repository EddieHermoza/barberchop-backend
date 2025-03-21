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
exports.InventoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const products_service_1 = require("../products/products.service");
const client_1 = require("@prisma/client");
let InventoryService = class InventoryService {
    constructor(db, productService) {
        this.db = db;
        this.productService = productService;
    }
    async createMovement(createMovementDto) {
        const { type, quantity, productId } = createMovementDto;
        if (createMovementDto.type === 'SALIDA') {
            const product = await this.productService.findOne(createMovementDto.productId);
            if (product.stock < createMovementDto.quantity)
                throw new common_1.BadRequestException('El producto no tiene el suficiente stock para realizar el movimiento');
        }
        await this.updateProductStock(productId, quantity, type);
        return await this.db.movement.create({
            data: createMovementDto,
        });
    }
    async findAvailaibleProducts({ page, limit, query, category, }) {
        const pages = page || 1;
        const skip = (pages - 1) * limit;
        return await this.db.product.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                category: true,
                stock: true,
                orderLimit: true,
                img: true,
                price: true,
                discount: true,
            },
            where: {
                AND: [
                    query
                        ? {
                            name: {
                                contains: query,
                                mode: client_1.Prisma.QueryMode.insensitive,
                            },
                        }
                        : {},
                    category
                        ? {
                            category: {
                                equals: category,
                            },
                        }
                        : {},
                ],
                stock: { gt: 0 },
                isActive: true,
                isArchived: false,
            },
            skip: skip,
            take: limit,
        });
    }
    async findAllProductsInventory({ page, limit, query, status, }) {
        const pages = page || 1;
        const skip = (pages - 1) * limit;
        return await this.db.product.findMany({
            select: {
                id: true,
                name: true,
                stock: true,
                lastStockEntry: true,
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
    async findAllMovements({ page, limit, status }) {
        const pages = page || 1;
        const skip = (pages - 1) * limit;
        console.log(status);
        return await this.db.movement.findMany({
            include: {
                Product: {
                    select: {
                        name: true,
                    },
                },
            },
            where: {
                AND: [status !== null && status !== undefined ? { type: status } : {}],
            },
            skip: skip,
            take: limit,
        });
    }
    async findOneMovement(id) {
        const movement = await this.db.movement.findFirst({
            where: {
                id,
            },
        });
        if (!movement)
            throw new common_1.NotFoundException(`El movimiento con el id ${id} no existe`);
        return movement;
    }
    async updateProductStock(productId, quantity, type) {
        const movementQuantity = type === 'ENTRADA' ? quantity : -quantity;
        try {
            const newStock = await this.db.product.update({
                where: {
                    id: productId,
                    isArchived: false,
                },
                data: {
                    ...(type === 'ENTRADA' && { lastStockEntry: new Date() }),
                    stock: { increment: movementQuantity },
                },
            });
            return newStock;
        }
        catch (error) {
            if ((error.code = 'P2025'))
                throw new common_1.NotFoundException(`El producto del id ${productId} no existe`);
            throw error;
        }
    }
};
exports.InventoryService = InventoryService;
exports.InventoryService = InventoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        products_service_1.ProductsService])
], InventoryService);
//# sourceMappingURL=inventory.service.js.map