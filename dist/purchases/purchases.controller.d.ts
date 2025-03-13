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
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
        adminId: number;
    }>;
    findAll(params: SearchQueryDto): Promise<{
        id: number;
        created: Date;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
        adminId: number;
    }[]>;
    findOne(id: number): Promise<{
        PurchaseItem: {
            id: number;
            price: import("@prisma/client/runtime/library").Decimal;
            productId: number;
            quantity: number;
            productName: string;
            purchaseId: number;
        }[];
        Provider: {
            id: number;
            name: string;
            ruc: string;
        };
        Admin: {
            User: {
                id: number;
                name: string;
                dni: string;
                lastName: string;
                email: string;
                role: import(".prisma/client").$Enums.UserRole;
            };
        };
    } & {
        id: number;
        created: Date;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
        adminId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        created: Date;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        providerId: number;
        receiptType: import(".prisma/client").$Enums.ReceiptType;
        receiptNumber: string;
        receiptDate: Date;
        adminId: number;
    }>;
}
