import { Type } from 'class-transformer';
import {
  IsString,
  IsEmail,
  IsBoolean,
  Length,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(8, 8, { message: 'El DNI debe tener exactamente 8 caracteres.' })
  dni: string;

  @IsString()
  @Length(2, 50, { message: 'El nombre debe tener entre 2 y 50 caracteres.' })
  name: string;

  @IsString()
  @Length(2, 50, { message: 'El apellido debe tener entre 2 y 50 caracteres.' })
  lastName: string;

  @IsEmail({}, { message: 'El correo electrónico no es válido.' })
  email: string;

  @IsString()
  @Length(8, 20, {
    message: 'La contraseña debe tener entre 8 y 20 caracteres.',
  })
  password: string;

  @Type(() => Boolean)
  @IsBoolean({ message: 'El campo isActive debe ser un valor booleano.' })
  @IsOptional()
  isActive: boolean;
}
