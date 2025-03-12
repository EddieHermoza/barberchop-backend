import { IsString, Length } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class CreateClientDto extends CreateUserDto {
  @IsString()
  @Length(9, 9, { message: 'El número debe tener 9 caracteres.' })
  number: string;
}
