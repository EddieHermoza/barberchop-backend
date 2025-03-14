import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { IUserSession } from 'src/common/interfaces/user-session.interface';
import { SearchQueryDto } from 'src/common/dto/search-query.dto';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    create(user: IUserSession, createSaleDto: CreateSaleDto): Promise<{
        status: import(".prisma/client").$Enums.Status;
        id: number;
        created: Date;
        discount: import("@prisma/client/runtime/library").Decimal;
        customerId: number;
        transaction: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }>;
    findAll(params: SearchQueryDto): Promise<{
        status: import(".prisma/client").$Enums.Status;
        id: number;
        created: Date;
        discount: import("@prisma/client/runtime/library").Decimal;
        customerId: number;
        transaction: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }[]>;
    findOne(id: number): Promise<{
        Customer: {
            User: {
                dni: string;
                name: string;
                lastName: string;
                email: string;
                id: number;
                role: import(".prisma/client").$Enums.UserRole;
            };
        } & {
            number: string;
            id: number;
            isArchived: boolean;
            userId: number;
        };
        SaleItem: {
            id: number;
            discount: import("@prisma/client/runtime/library").Decimal;
            price: import("@prisma/client/runtime/library").Decimal;
            productId: number;
            quantity: number;
            productName: string;
            saleId: number;
        }[];
    } & {
        status: import(".prisma/client").$Enums.Status;
        id: number;
        created: Date;
        discount: import("@prisma/client/runtime/library").Decimal;
        customerId: number;
        transaction: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
