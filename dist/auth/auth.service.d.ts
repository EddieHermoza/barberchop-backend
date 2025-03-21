import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signIn.dto';
import { IUserSession } from 'src/common/interfaces/user-session.interface';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    register(): Promise<void>;
    signIn({ email, password }: SignInDto): Promise<{
        user: IUserSession;
        backendTokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    signOut(): Promise<void>;
    refresh(user: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
