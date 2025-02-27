import { IsNumber, IsString } from 'class-validator';

export class CreatePurchaseItemDto {
  @IsNumber()
  purchaseId: number;

  @IsNumber()
  productId: number;

  @IsString()
  productName: string;

  @IsNumber()
  quantity: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;
}
