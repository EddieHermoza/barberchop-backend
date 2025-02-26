import { ReceiptType } from '@prisma/client';
import { CreatePurchaseItemDto } from './create-purchase-itemsdto';
export declare class CreatePurchaseDto {
    userId: number;
    providerId: number;
    totalAmount: number;
    receiptType: ReceiptType;
    receiptNumber: string;
    receiptDate: Date;
    purchaseItems: CreatePurchaseItemDto[];
}
