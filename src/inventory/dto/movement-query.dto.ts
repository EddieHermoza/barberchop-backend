import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum } from 'class-validator';
import { PaginatedQueryDto } from 'src/common/dto/paginated-query.dto';
import { MovementType } from '@prisma/client';

export class MovementQueryDto extends PaginatedQueryDto {
  @ApiProperty({
    description: 'Tipo de Movimiento',
    enum: MovementType,
    example: 'ENTRADA',
    default: 'ENTRADA',
  })
  @IsOptional()
  @IsEnum(MovementType, {
    message:
      'el parámetro status debe ser uno de los siguientes valores : ENTRADA O SALIDA',
  })
  status?: MovementType | null = null;
}
