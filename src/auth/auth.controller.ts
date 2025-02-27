import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';
import { UserSession } from 'src/common/decorators/user-session.decorator';
import { IUserSession } from 'src/common/interfaces/user-session.interface';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/signIn')
  async signIn(@Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto);
  }

  @ApiBearerAuth()
  @Get('/profile')
  getProfile(@UserSession() user: IUserSession) {
    if (!user) throw new BadRequestException('No se ha encontrado el usuario');
    return user.id;
  }
}
