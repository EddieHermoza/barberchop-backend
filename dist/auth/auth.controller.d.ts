import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';
import { IUserSession } from 'src/common/interfaces/user-session.interface';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto): Promise<{
        user: IUserSession;
        backendTokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    getProfile(user: IUserSession): IUserSession;
    refreshToken(req: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
