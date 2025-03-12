import { ApiProperty } from '@nestjs/swagger';
import { ProductCategory } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @ApiProperty({ enum: ProductCategory })
  @IsEnum(ProductCategory)
  category: ProductCategory;

  @IsOptional()
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
