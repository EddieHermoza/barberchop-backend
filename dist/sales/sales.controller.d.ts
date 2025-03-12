import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { IUserSession } from 'src/common/interfaces/user-session.interface';
import { SearchQueryDto } from 'src/common/dto/search-query.dto';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    create(user: IUserSession, createSaleDto: CreateSaleDto): Promise<{
        id: number;
        created: Date;
        transaction: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
        status: import(".prisma/client").$Enums.Status;
        customerId: number;
    }>;
    findAll(params: SearchQueryDto): Promise<{
        id: number;
        created: Date;
        transaction: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
        status: import(".prisma/client").$Enums.Status;
        customerId: number;
    }[]>;
    findOne(id: number): Promise<{
        SaleItem: {
            id: number;
            discount: import("@prisma/client/runtime/library").Decimal;
            productName: string;
            quantity: number;
            price: import("@prisma/client/runtime/library").Decimal;
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
        amount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
        status: import(".prisma/client").$Enums.Status;
        customerId: number;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
