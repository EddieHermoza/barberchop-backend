import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateHaircutDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  imgs: string[];

  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}
