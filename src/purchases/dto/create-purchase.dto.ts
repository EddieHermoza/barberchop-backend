import { ReceiptType } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsDate,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreatePurchaseItemDto } from './create-purchase-item.dto';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseDto {
  @ApiHideProperty()
  @IsOptional()
  @IsInt()
  adminId: number;

  @Type(() => Number)
  @IsInt()
  providerId: number;

  @Type(() => Number)
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

  @Type(() => Date)
  @IsDate()
  receiptDate: Date;

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreatePurchaseItemDto)
  PurchaseItem: CreatePurchaseItemDto[];
}
