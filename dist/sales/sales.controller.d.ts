import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { QueryProps } from 'src/pipes/validate-query.pipe';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    create(createSaleDto: CreateSaleDto): Promise<{
        id: number;
        created: Date;
        status: import(".prisma/client").$Enums.Status;
        discount: import("@prisma/client/runtime/library").Decimal;
        userId: number;
        transaction: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }>;
    findAll(params: QueryProps): Promise<{
        id: number;
        created: Date;
        status: import(".prisma/client").$Enums.Status;
        discount: import("@prisma/client/runtime/library").Decimal;
        userId: number;
        transaction: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        created: Date;
        User: {
            name: string;
            lastName: string;
            email: string;
            id: number;
        };
        status: import(".prisma/client").$Enums.Status;
        discount: import("@prisma/client/runtime/library").Decimal;
        SaleItem: {
            id: number;
            discount: import("@prisma/client/runtime/library").Decimal;
            price: import("@prisma/client/runtime/library").Decimal;
            productId: number;
            quantity: number;
            productName: string;
        }[];
        transaction: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import(".prisma/client").$Enums.PaymentMethod;
    }>;
    remove(id: number): Promise<void>;
}
