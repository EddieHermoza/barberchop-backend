import {
  IsBoolean,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class CreateBarberDto extends CreateUserDto {
  @IsOptional()
  @IsString()
  @IsUrl()
  img: string;

  @Length(2, 100)
  @IsString()
  skills: string;

  @IsOptional()
  @IsBoolean()
  isActiveBarber: boolean;
}
