import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { ProductCategory } from '@prisma/client';
import { Type } from 'class-transformer';
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

  @ApiHideProperty()
  @IsOptional()
  @IsString()
  img: string;

  @Type(() => Number)
  @IsInt()
  orderLimit: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  discount: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;

  @Type(() => Boolean)
  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}
