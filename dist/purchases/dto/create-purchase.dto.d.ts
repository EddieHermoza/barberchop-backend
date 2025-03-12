import { ReceiptType } from '@prisma/client';
import { CreatePurchaseItemDto } from './create-purchase-item.dto';
export declare class CreatePurchaseDto {
    adminId: number;
    providerId: number;
    totalAmount: number;
    receiptType: ReceiptType;
    receiptNumber: string;
    receiptDate: Date;
    PurchaseItem: CreatePurchaseItemDto[];
}
