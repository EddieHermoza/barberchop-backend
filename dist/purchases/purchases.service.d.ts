import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { InventoryService } from 'src/inventory/inventory.service';
import { SearchQueryDto } from 'src/common/dto/search-query.dto';
export declare class PurchasesService {
    private readonly db;
    private readonly InventoryService;
    constructor(db: PrismaService, InventoryService: InventoryService);
    create(createPurchaseDto: CreatePurchaseDto): Promise<{
        id: number;
        created: Date;
        userId: number;
        totalAmount: Prisma.Decimal;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
    }>;
    findAll({ limit, page, query }: SearchQueryDto): Promise<{
        id: number;
        created: Date;
        userId: number;
        totalAmount: Prisma.Decimal;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        created: Date;
        User: {
            name: string;
            lastName: string;
            id: number;
        };
        Provider: {
            name: string;
            id: number;
        };
        PurchaseItem: {
            price: Prisma.Decimal;
            productId: number;
            quantity: number;
            productName: string;
        }[];
        totalAmount: Prisma.Decimal;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        created: Date;
        userId: number;
        totalAmount: Prisma.Decimal;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
    }>;
}
