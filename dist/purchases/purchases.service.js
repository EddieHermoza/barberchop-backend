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
exports.PurchasesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
const inventory_service_1 = require("../inventory/inventory.service");
let PurchasesService = class PurchasesService {
    constructor(db, InventoryService) {
        this.db = db;
        this.InventoryService = InventoryService;
    }
    async create(createPurchaseDto) {
        const { PurchaseItem } = createPurchaseDto;
        return await this.db.$transaction(async (prisma) => {
            const purchase = await prisma.purchase.create({
                data: {
                    ...createPurchaseDto,
                    PurchaseItem: {
                        createMany: {
                            data: PurchaseItem,
                        },
                    },
                },
            });
            await Promise.all(createPurchaseDto.PurchaseItem.map(async (item) => {
                await this.InventoryService.updateProductStock(item.productId, item.quantity, 'ENTRADA');
            }));
            return purchase;
        });
    }
    async findAll({ limit, page, query }) {
        const pages = page || 1;
        const skip = (pages - 1) * limit;
        return await this.db.purchase.findMany({
            where: {
                AND: [
                    query
                        ? {
                            receiptNumber: {
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
        const purchase = await this.db.purchase.findFirst({
            where: { id },
            include: {
                Admin: {
                    select: {
                        User: {
                            omit: {
                                password: true,
                                created: true,
                                updated: true,
                                isActive: true,
                                isArchived: true,
                            },
                        },
                    },
                },
                PurchaseItem: {},
                Provider: {
                    select: {
                        id: true,
                        ruc: true,
                        name: true,
                    },
                },
            },
        });
        if (!purchase)
            throw new common_1.NotFoundException(`La compra del id ${id} no existe`);
        return purchase;
    }
    async remove(id) {
        await this.findOne(id);
        const purchase = await this.db.purchase.delete({
            where: { id },
        });
        return purchase;
    }
};
exports.PurchasesService = PurchasesService;
exports.PurchasesService = PurchasesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], PurchasesService);
//# sourceMappingURL=purchases.service.js.map