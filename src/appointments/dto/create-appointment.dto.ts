import { ApiProperty } from '@nestjs/swagger';
import { AppointmentStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAppointmentDto {
  @Type(() => Date)
  @IsDate()
  scheduledAt: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  userId: number;

  @IsInt()
  barberId: number;

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
