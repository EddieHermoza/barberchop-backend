import { PaymentMethod, Status } from '@prisma/client';
import { CreateSaleItemDto } from './create-sale-item.dto';
export declare class CreateSaleDto {
  userId: number;
  transaction: string;
  amount: number;
  discount: number;
  totalAmount: number;
  paymentMethod: PaymentMethod;
  status: Status;
  saleItems: CreateSaleItemDto[];
}
