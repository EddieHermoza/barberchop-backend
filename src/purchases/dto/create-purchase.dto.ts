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
import { CreatePurchaseItemDto } from './create-purchase-item.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseDto {
  @ApiProperty({ required: false })
  @IsNumber()
  userId: number;

  @IsNumber()
  providerId: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  totalAmount: number;

  @ApiProperty({ enum: ReceiptType })
  @IsEnum(ReceiptType, {
    message:
      'El tipo de comprobante debe ser uno de los siguientes valores: BOLETA, FACTURA.',
  })
  receiptType: ReceiptType;

  @IsString()
  receiptNumber: string;

  @IsDate()
  receiptDate: Date;

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreatePurchaseItemDto)
  purchaseItems: CreatePurchaseItemDto[];
}
