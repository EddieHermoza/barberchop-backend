import { CreateSaleDto } from './dto/create-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryProps } from 'src/pipes/validate-query.pipe';
import { Prisma } from '@prisma/client';
import { InventoryService } from 'src/inventory/inventory.service';
export declare class SalesService {
    private readonly db;
    private readonly InventoryService;
    constructor(db: PrismaService, InventoryService: InventoryService);
    create(createSaleDto: CreateSaleDto): Promise<{
        id: number;
        created: Date;
        discount: Prisma.Decimal;
        status: import(".prisma/client").$Enums.Status;
        transaction: string;
        userId: number;
        amount: Prisma.Decimal;
        totalAmount: Prisma.Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }>;
    findAll({ limit, page, query }: QueryProps): Promise<{
        id: number;
        created: Date;
        discount: Prisma.Decimal;
        status: import(".prisma/client").$Enums.Status;
        transaction: string;
        userId: number;
        amount: Prisma.Decimal;
        totalAmount: Prisma.Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        created: Date;
        discount: Prisma.Decimal;
        SaleItem: {
            id: number;
            price: Prisma.Decimal;
            discount: Prisma.Decimal;
            productId: number;
            quantity: number;
            productName: string;
        }[];
        status: import(".prisma/client").$Enums.Status;
        transaction: string;
        amount: Prisma.Decimal;
        totalAmount: Prisma.Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
        User: {
            id: number;
            name: string;
            lastName: string;
            email: string;
        };
    }>;
    remove(id: number): Promise<void>;
}
