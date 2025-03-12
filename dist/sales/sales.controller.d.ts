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
        status: import(".prisma/client").$Enums.Status;
        userId: number;
        amount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        transaction: string;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }>;
    findAll(params: SearchQueryDto): Promise<{
        id: number;
        created: Date;
        status: import(".prisma/client").$Enums.Status;
        userId: number;
        amount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        transaction: string;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        created: Date;
        status: import(".prisma/client").$Enums.Status;
        userId: number;
        amount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        transaction: string;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
