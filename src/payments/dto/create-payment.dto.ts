import { ApiProperty } from '@nestjs/swagger';
import { PaymentMethod, Status } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsNumber, IsInt, IsEnum, IsString, IsOptional } from 'class-validator';

export class CreatePaymentDto {
  @Type(() => Number)
  @IsInt()
  appointmentId: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  amount: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  additionalAmount: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  discount: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  totalAmount: number;

  @ApiProperty({ enum: PaymentMethod })
  @IsEnum(PaymentMethod)
  method: PaymentMethod;

  @ApiProperty({ enum: Status })
  @IsEnum(Status)
  status: Status;

  @IsString()
  @IsOptional()
  notes: string;
}
