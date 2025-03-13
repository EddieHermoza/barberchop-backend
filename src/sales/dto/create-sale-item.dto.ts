import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateSaleItemDto {
  @Type(() => Number)
  @IsInt()
  productId: number;

  @IsString()
  productName: string;

  @Type(() => Number)
  @IsInt()
  quantity: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  discount: number;
}
