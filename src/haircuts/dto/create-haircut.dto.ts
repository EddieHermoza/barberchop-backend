import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateHaircutDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  imgs: string[];

  @IsBoolean()
  isActive: boolean;
}
