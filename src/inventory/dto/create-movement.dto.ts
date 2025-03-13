import { ApiProperty } from '@nestjs/swagger';
import { MovementType } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsString } from 'class-validator';

export class CreateMovementDto {
  @Type(() => Number)
  @IsInt()
  productId: number;

  @Type(() => Number)
  @IsInt()
  quantity: number;

  @IsString()
  notes: string;

  @ApiProperty({ enum: MovementType })
  @IsEnum(MovementType, {
    message:
      'El tipo de movimiento debe ser uno de los siguientes valores: ENTRADA, SALIDA.',
  })
  type: MovementType;
}
