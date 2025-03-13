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
        discount: Prisma.Decimal;
        status: import(".prisma/client").$Enums.Status;
        transaction: string;
        amount: Prisma.Decimal;
        totalAmount: Prisma.Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
        customerId: number;
    }>;
    findAll({ limit, page, query }: SearchQueryDto): Promise<{
        id: number;
        created: Date;
        discount: Prisma.Decimal;
        status: import(".prisma/client").$Enums.Status;
        transaction: string;
        amount: Prisma.Decimal;
        totalAmount: Prisma.Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
        customerId: number;
    }[]>;
    findOne(id: number): Promise<{
        SaleItem: {
            id: number;
            price: Prisma.Decimal;
            discount: Prisma.Decimal;
            productId: number;
            quantity: number;
            productName: string;
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
        discount: Prisma.Decimal;
        status: import(".prisma/client").$Enums.Status;
        transaction: string;
        amount: Prisma.Decimal;
        totalAmount: Prisma.Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
        customerId: number;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
