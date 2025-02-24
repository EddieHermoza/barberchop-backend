import { ReceiptType } from '@prisma/client';
import { CreatePurchaseItemDto } from './create-purchase-itemsdto';
export declare class CreatePurchaseDto {
    userId: number;
    providerId: number;
    totalAmount: number;
    receipType: ReceiptType;
    receiptNumber: string;
    receipDate: Date;
    saleItems: CreatePurchaseItemDto[];
}
