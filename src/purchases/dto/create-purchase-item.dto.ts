import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreatePurchaseItemDto {
  @Type(() => Number)
  @IsInt()
  productId: number;

  @IsString()
  productName: string;

  @Type(() => Number)
  @IsNumber()
  quantity: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;
}
