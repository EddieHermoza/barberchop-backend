import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreatePurchaseItemDto {
  @IsInt()
  productId: number;

  @IsString()
  productName: string;

  @IsNumber()
  quantity: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;
}
