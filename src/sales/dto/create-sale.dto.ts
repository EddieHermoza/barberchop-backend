import { PaymentMethod, Status } from '@prisma/client';
import {
  ArrayNotEmpty,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateSaleItemDto } from './create-sale-item.dto';
import { Type } from 'class-transformer';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export class CreateSaleDto {
  @ApiHideProperty()
  @IsOptional()
  @IsInt()
  customerId: number;

  @IsString()
  transaction: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  amount: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  discount: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  totalAmount: number;

  @ApiProperty({ enum: PaymentMethod })
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @ApiProperty({ enum: Status })
  @IsEnum(Status)
  status: Status;

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateSaleItemDto)
  saleItems: CreateSaleItemDto[];
}
