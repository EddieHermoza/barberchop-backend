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
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        adminId: number;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
    }>;
    findAll(params: SearchQueryDto): Promise<{
        id: number;
        created: Date;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        adminId: number;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
    }[]>;
    findOne(id: number): Promise<{
        Admin: {
            User: {
                dni: string;
                name: string;
                lastName: string;
                email: string;
                id: number;
                role: import(".prisma/client").$Enums.UserRole;
            };
        };
        Provider: {
            name: string;
            id: number;
            ruc: string;
        };
        PurchaseItem: {
            id: number;
            price: import("@prisma/client/runtime/library").Decimal;
            productId: number;
            quantity: number;
            productName: string;
            purchaseId: number;
        }[];
    } & {
        id: number;
        created: Date;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        adminId: number;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        created: Date;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        adminId: number;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
    }>;
}
