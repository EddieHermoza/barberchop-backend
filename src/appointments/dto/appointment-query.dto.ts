import { BadRequestException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AppointmentStatus } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsEnum, IsOptional } from 'class-validator';
import { isValid, parse } from 'date-fns';
import { PaginatedQueryDto } from 'src/common/dto/paginated-query.dto';

export class AppointmentQueryDto extends PaginatedQueryDto {
  @ApiProperty({
    description: 'Rango inicial de fechas',
    example: '2025-01-01',
    format: 'yyyy-MM-dd',
    type: 'string',
  })
  @IsOptional()
  @Transform(({ value }) => {
    if (!value) return null;
    if (value instanceof Date) return value;
    const date = parse(value, 'yyyy-MM-dd', new Date());

    if (!isValid(date)) {
      throw new BadRequestException(
        `El parámetro from_date no es una fecha válida. Usa el formato yyyy-MM-dd.`,
      );
    }

    return date;
  })
  from_date?: Date | null = null;

  @ApiProperty({
    description: 'Rango final de fechas',
    example: '2025-01-01',
    format: 'yyyy-MM-dd',
    type: 'string',
  })
  @IsOptional()
  @Transform(({ value }) => {
    if (!value) return null;
    if (value instanceof Date) return value;
    const date = parse(value, 'yyyy-MM-dd', new Date());

    if (!isValid(date)) {
      throw new BadRequestException(
        `El parámetro to_date no es una fecha válida. Usa el formato yyyy-MM-dd.`,
      );
    }

    return date;
  })
  to_date?: Date | null = null;

  @ApiProperty({
    description: 'Estado de la cita',
    enum: AppointmentStatus,
    example: 'PENDIENTE',
  })
  @IsOptional()
  @IsEnum(AppointmentStatus, {
    message:
      'el parámetro status debe ser uno de los siguientes valores : PENDIENTE,CONFIRMADA, EN_PROCESO, COMPLETADA O CANCELADA',
  })
  status?: AppointmentStatus | null = null;
}
