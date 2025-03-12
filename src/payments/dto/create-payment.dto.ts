import { ApiProperty } from '@nestjs/swagger';
import { PaymentMethod, Status } from '@prisma/client';
import { IsNumber, IsInt, IsEnum, IsString, IsOptional } from 'class-validator';

export class CreatePaymentDto {
  @IsInt()
  appointmentId: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  amount: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  additionalAmount: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  discount: number;

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
