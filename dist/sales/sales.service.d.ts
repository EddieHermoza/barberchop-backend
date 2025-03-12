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
        id: number;
        created: Date;
        status: import(".prisma/client").$Enums.Status;
        userId: number;
        amount: Prisma.Decimal;
        discount: Prisma.Decimal;
        totalAmount: Prisma.Decimal;
        transaction: string;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }>;
    findAll({ limit, page, query }: SearchQueryDto): Promise<{
        id: number;
        created: Date;
        status: import(".prisma/client").$Enums.Status;
        userId: number;
        amount: Prisma.Decimal;
        discount: Prisma.Decimal;
        totalAmount: Prisma.Decimal;
        transaction: string;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        created: Date;
        status: import(".prisma/client").$Enums.Status;
        userId: number;
        amount: Prisma.Decimal;
        discount: Prisma.Decimal;
        totalAmount: Prisma.Decimal;
        transaction: string;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
