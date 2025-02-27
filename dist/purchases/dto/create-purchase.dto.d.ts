import { ReceiptType } from '@prisma/client';
import { CreatePurchaseItemDto } from './create-purchase-item.dto';
export declare class CreatePurchaseDto {
    userId: number;
    providerId: number;
    totalAmount: number;
    receiptType: ReceiptType;
    receiptNumber: string;
    receiptDate: Date;
    purchaseItems: CreatePurchaseItemDto[];
}
