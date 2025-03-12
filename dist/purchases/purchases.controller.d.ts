import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { IUserSession } from 'src/common/interfaces/user-session.interface';
import { SearchQueryDto } from 'src/common/dto/search-query.dto';
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
    findAll(params: SearchQueryDto): Promise<{
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
        userId: number;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        providerId: number;
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
