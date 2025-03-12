import { ApiProperty } from '@nestjs/swagger';
import { PaymentMethod, Status } from '@prisma/client';
import { IsEnum, IsOptional } from 'class-validator';
import { PaginatedQueryDto } from 'src/common/dto/paginated-query.dto';

export class AppointmentPaymentQueryDto extends PaginatedQueryDto {
  @ApiProperty({
    description: 'Tipo de pago',
    enum: PaymentMethod,
    example: 'EFECTIVO',
  })
  @IsOptional()
  @IsEnum(PaymentMethod, {
    message:
      'el parámetro payment debe ser uno de los siguientes valores : EFECTIVO,YAPE, PLIN, TARJETA',
  })
  payment?: PaymentMethod | null = null;

  @ApiProperty({
    description: 'Estado del Pago',
    enum: Status,
    example: 'PENDIENTE',
  })
  @IsOptional()
  @IsEnum(Status, {
    message:
      'el parámetro status debe ser uno de los siguientes valores : PENDIENTE,COMPLETADO,CANCELADO',
  })
  status?: Status | null = null;
}
