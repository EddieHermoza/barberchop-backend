import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  @IsOptional()
  img: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}
