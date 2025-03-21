import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { SignInDto } from './dto/signIn.dto';
import { IUserSession } from 'src/common/interfaces/user-session.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register() {}

  async signIn({ email, password }: SignInDto) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('El usuario no existe');
    }
    let roleId = 0;
    if (user.role === 'ADMINISTRADOR' && user.Admin) {
      roleId = user.Admin.id;
    } else if (user.role === 'CLIENTE' && user.Customer) {
      roleId = user.Customer.id;
    } else if (user.role === 'BARBERO' && user.Barber) {
      roleId = user.Barber.id;
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) throw new UnauthorizedException('La contraseña es incorrecta');

    const payload: IUserSession = {
      id: user.id,
      username: user.name + ' ' + user.lastName,
      email: user.email,
      role: user.role,
      roleId: roleId,
    };

    console.log(payload);

    return {
      payload,
      backendTokens: {
        accessToken: await this.jwtService.signAsync(payload, {
          secret: process.env.JWT_SECRET,
          expiresIn: '1d',
        }),
        refreshToken: await this.jwtService.signAsync(payload, {
          secret: process.env.JWT_REFRESH_SECRET,
          expiresIn: '7d',
        }),
      },
    };
  }

  async signOut() {}

  async refresh(user: any) {
    const payload: IUserSession = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      roleId: user.roleId,
    };
    return {
      accessToken: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '1d',
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '7d',
      }),
    };
  }
}
