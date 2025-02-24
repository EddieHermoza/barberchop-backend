import { PaymentMethod, Status } from '@prisma/client';
import {
  ArrayNotEmpty,
  IsEnum,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateSaleItemDto } from './create-sale-item.dto';
import { Type } from 'class-transformer';

export class CreateSaleDto {
  @IsNumber()
  userId: number;

  @IsString()
  transaction: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  amount: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  discount: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  totalAmount: number;

  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @IsEnum(Status)
  status: Status;

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateSaleItemDto)
  saleItems: CreateSaleItemDto[];
}
