import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { QueryProps } from 'src/pipes/validate-query.pipe';
import { IUserSession } from 'src/common/interfaces/user-session.interface';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    create(user: IUserSession, createSaleDto: CreateSaleDto): Promise<{
        id: number;
        created: Date;
        discount: import("@prisma/client/runtime/library").Decimal;
        status: import(".prisma/client").$Enums.Status;
        transaction: string;
        userId: number;
        amount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }>;
    findAll(params: QueryProps): Promise<{
        id: number;
        created: Date;
        discount: import("@prisma/client/runtime/library").Decimal;
        status: import(".prisma/client").$Enums.Status;
        transaction: string;
        userId: number;
        amount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        created: Date;
        discount: import("@prisma/client/runtime/library").Decimal;
        SaleItem: {
            id: number;
            price: import("@prisma/client/runtime/library").Decimal;
            discount: import("@prisma/client/runtime/library").Decimal;
            productId: number;
            quantity: number;
            productName: string;
        }[];
        status: import(".prisma/client").$Enums.Status;
        transaction: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
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
