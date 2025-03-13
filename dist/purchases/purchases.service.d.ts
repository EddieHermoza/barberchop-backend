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
        totalAmount: Prisma.Decimal;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
        adminId: number;
    }>;
    findAll({ limit, page, query }: SearchQueryDto): Promise<{
        id: number;
        created: Date;
        totalAmount: Prisma.Decimal;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
        adminId: number;
    }[]>;
    findOne(id: number): Promise<{
        PurchaseItem: {
            id: number;
            price: Prisma.Decimal;
            productId: number;
            quantity: number;
            productName: string;
            purchaseId: number;
        }[];
        Provider: {
            id: number;
            name: string;
            ruc: string;
        };
        Admin: {
            User: {
                id: number;
                name: string;
                dni: string;
                lastName: string;
                email: string;
                role: import(".prisma/client").$Enums.UserRole;
            };
        };
    } & {
        id: number;
        created: Date;
        totalAmount: Prisma.Decimal;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
        adminId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        created: Date;
        totalAmount: Prisma.Decimal;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
        adminId: number;
    }>;
}
