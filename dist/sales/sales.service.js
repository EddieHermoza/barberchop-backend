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
exports.SalesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
const inventory_service_1 = require("../inventory/inventory.service");
let SalesService = class SalesService {
    constructor(db, InventoryService) {
        this.db = db;
        this.InventoryService = InventoryService;
    }
    async create(createSaleDto) {
        return await this.db.$transaction(async (prisma) => {
            const sale = await prisma.sale.create({
                data: {
                    ...createSaleDto,
                    SaleItem: {
                        createMany: {
                            data: createSaleDto.saleItems,
                        },
                    },
                },
            });
            await Promise.all(createSaleDto.saleItems.map(async (item) => {
                await this.InventoryService.updateProductStock(item.productId, item.quantity, 'SALIDA');
            }));
            return sale;
        });
    }
    async findAll({ limit, page, query }) {
        const pages = page || 1;
        const skip = (pages - 1) * limit;
        return await this.db.sale.findMany({
            where: {
                AND: [
                    query
                        ? {
                            transaction: {
                                contains: query,
                                mode: client_1.Prisma.QueryMode.insensitive,
                            },
                        }
                        : {},
                ],
            },
            skip: skip,
            take: limit,
        });
    }
    async findOne(id) {
        const sale = await this.db.sale.findFirst({
            where: {
                id,
            },
            select: {
                id: true,
                created: true,
                transaction: true,
                amount: true,
                discount: true,
                totalAmount: true,
                paymentMethod: true,
                status: true,
                User: {
                    select: {
                        id: true,
                        name: true,
                        lastName: true,
                        email: true,
                    },
                },
                SaleItem: {
                    select: {
                        id: true,
                        productId: true,
                        productName: true,
                        quantity: true,
                        price: true,
                        discount: true,
                    },
                },
            },
        });
        if (!sale)
            throw new common_1.NotFoundException(`La venta del id ${id} no existe`);
        return sale;
    }
    async remove(id) {
        const sale = await this.db.sale.delete({
            where: {
                id,
            },
        });
        if (!sale)
            throw new common_1.NotFoundException(`La venta del id ${id} no existe`);
    }
};
exports.SalesService = SalesService;
exports.SalesService = SalesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], SalesService);
//# sourceMappingURL=sales.service.js.map