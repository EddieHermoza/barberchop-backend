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
        transaction: string;
        amount: Prisma.Decimal;
        discount: Prisma.Decimal;
        totalAmount: Prisma.Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
        status: import(".prisma/client").$Enums.Status;
        customerId: number;
    }>;
    findAll({ limit, page, query }: SearchQueryDto): Promise<{
        id: number;
        created: Date;
        transaction: string;
        amount: Prisma.Decimal;
        discount: Prisma.Decimal;
        totalAmount: Prisma.Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
        status: import(".prisma/client").$Enums.Status;
        customerId: number;
    }[]>;
    findOne(id: number): Promise<{
        SaleItem: {
            id: number;
            discount: Prisma.Decimal;
            productName: string;
            quantity: number;
            price: Prisma.Decimal;
            productId: number;
            saleId: number;
        }[];
        Customer: {
            User: {
                id: number;
                name: string;
                dni: string;
                lastName: string;
                email: string;
                role: import(".prisma/client").$Enums.UserRole;
            };
        } & {
            number: string;
            id: number;
            isArchived: boolean;
            userId: number;
        };
    } & {
        id: number;
        created: Date;
        transaction: string;
        amount: Prisma.Decimal;
        discount: Prisma.Decimal;
        totalAmount: Prisma.Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
        status: import(".prisma/client").$Enums.Status;
        customerId: number;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
