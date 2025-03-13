import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { AppointmentStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAppointmentDto {
  @Type(() => Date)
  @IsDate()
  scheduledAt: Date;

  @ApiHideProperty()
  @IsOptional()
  @IsInt()
  customerId: number;

  @Type(() => Number)
  @IsInt()
  barberId: number;

  @Type(() => Number)
  @IsInt()
  serviceId: number;

  @ApiProperty({ enum: AppointmentStatus })
  @IsEnum(AppointmentStatus)
  status: AppointmentStatus;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes: string;
}
