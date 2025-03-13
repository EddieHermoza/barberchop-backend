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
        discount: import("@prisma/client/runtime/library").Decimal;
        status: import(".prisma/client").$Enums.Status;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        transaction: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
        customerId: number;
    }>;
    findAll(params: SearchQueryDto): Promise<{
        id: number;
        created: Date;
        discount: import("@prisma/client/runtime/library").Decimal;
        status: import(".prisma/client").$Enums.Status;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        transaction: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
        customerId: number;
    }[]>;
    findOne(id: number): Promise<{
        SaleItem: {
            id: number;
            price: import("@prisma/client/runtime/library").Decimal;
            discount: import("@prisma/client/runtime/library").Decimal;
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
        discount: import("@prisma/client/runtime/library").Decimal;
        status: import(".prisma/client").$Enums.Status;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        transaction: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
        customerId: number;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
