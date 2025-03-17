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
    let roleId = 0;
    if (user.role === 'ADMINISTRADOR' && user.Admin) {
      roleId = user.Admin.id;
    } else if (user.role === 'CLIENTE' && user.Customer) {
      roleId = user.Customer.id;
    } else if (user.role === 'BARBERO' && user.Barber) {
      roleId = user.Barber.id;
    } else {
      throw new UnauthorizedException('El usuario no existe');
    }
    if (!user) throw new UnauthorizedException('El usuario no existe');

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

    return this.jwtService.signAsync(payload);
  }

  async signOut() {}
}
