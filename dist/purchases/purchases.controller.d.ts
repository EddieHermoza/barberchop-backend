import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { QueryProps } from 'src/pipes/validate-query.pipe';
import { IUserSession } from 'src/common/interfaces/user-session.interface';
export declare class PurchasesController {
    private readonly purchasesService;
    constructor(purchasesService: PurchasesService);
    create(user: IUserSession, createPurchaseDto: CreatePurchaseDto): Promise<{
        id: number;
        created: Date;
        userId: number;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
    }>;
    findAll(params: QueryProps): Promise<{
        id: number;
        created: Date;
        userId: number;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        created: Date;
        User: {
            name: string;
            lastName: string;
            id: number;
        };
        Provider: {
            name: string;
            id: number;
        };
        PurchaseItem: {
            price: import("@prisma/client/runtime/library").Decimal;
            productId: number;
            quantity: number;
            productName: string;
        }[];
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        created: Date;
        userId: number;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
    }>;
}
