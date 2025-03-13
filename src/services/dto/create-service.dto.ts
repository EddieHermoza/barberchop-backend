import { ApiHideProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @Type(() => Number)
  @IsNumber()
  price: number;

  @ApiHideProperty()
  @IsString()
  @IsOptional()
  img: string;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}
