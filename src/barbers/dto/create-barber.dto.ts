import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export class CreateBarberDto {
  @IsString()
  @Length(2, 50, { message: 'El nombre debe tener entre 2 y 50 caracteres.' })
  name: string;

  @IsOptional()
  @IsString({ message: 'La imagen debe ser una url válida' })
  img: string;

  @IsBoolean({ message: 'El campo isActive debe ser un valor booleano.' })
  isActive: boolean;
}
