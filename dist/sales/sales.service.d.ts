import { CreateSaleDto } from './dto/create-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { InventoryService } from 'src/inventory/inventory.service';
import { SearchQueryDto } from 'src/common/dto/search-query.dto';
export declare class SalesService {
    private readonly db;
    private readonly InventoryService;
    constructor(db: PrismaService, InventoryService: InventoryService);
    create(createSaleDto: CreateSaleDto): Promise<{
        status: import(".prisma/client").$Enums.Status;
        id: number;
        created: Date;
        discount: Prisma.Decimal;
        userId: number;
        transaction: string;
        amount: Prisma.Decimal;
        totalAmount: Prisma.Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }>;
    findAll({ limit, page, query }: SearchQueryDto): Promise<{
        status: import(".prisma/client").$Enums.Status;
        id: number;
        created: Date;
        discount: Prisma.Decimal;
        userId: number;
        transaction: string;
        amount: Prisma.Decimal;
        totalAmount: Prisma.Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }[]>;
    findOne(id: number): Promise<{
        status: import(".prisma/client").$Enums.Status;
        id: number;
        created: Date;
        User: {
            name: string;
            lastName: string;
            email: string;
            id: number;
        };
        discount: Prisma.Decimal;
        SaleItem: {
            id: number;
            discount: Prisma.Decimal;
            price: Prisma.Decimal;
            productId: number;
            quantity: number;
            productName: string;
        }[];
        transaction: string;
        amount: Prisma.Decimal;
        totalAmount: Prisma.Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }>;
    remove(id: number): Promise<void>;
}
