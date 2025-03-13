import { ApiHideProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateHaircutDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @ApiHideProperty()
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  imgs: string[];

  @Type(() => Boolean)
  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}
