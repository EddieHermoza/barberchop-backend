import { ReceiptType } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsDate,
  IsEnum,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreatePurchaseItemDto } from './create-purchase-itemsdto';

export class CreatePurchaseDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  providerId: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  totalAmount: number;

  @IsEnum(ReceiptType, {
    message:
      'El tipo de comprobante debe ser uno de los siguientes valores: BOLETA, FACTURA.',
  })
  receipType: ReceiptType;

  @IsString()
  receiptNumber: string;

  @IsDate()
  receipDate: Date;

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreatePurchaseItemDto)
  saleItems: CreatePurchaseItemDto[];
}
