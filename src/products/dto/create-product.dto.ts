import { IsBoolean, IsInt, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsString()
  img: string;

  @IsInt()
  orderLimit: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  discount: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;

  @IsBoolean()
  isActive: boolean;
}
