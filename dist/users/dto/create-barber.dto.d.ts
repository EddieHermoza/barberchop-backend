import { CreateUserDto } from './create-user.dto';
export declare class CreateBarberDto extends CreateUserDto {
    img: string;
    skills: string;
    isActiveBarber: boolean;
}
