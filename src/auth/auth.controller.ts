import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';
import { UserSession } from 'src/common/decorators/user-session.decorator';
import { IUserSession } from 'src/common/interfaces/user-session.interface';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Auth } from './decorators/auth.decorator';
import { RefreshTokenGuard } from './guards/refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/signIn')
  async signIn(@Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto);
  }

  @ApiBearerAuth()
  @Auth(['ADMINISTRADOR', 'CLIENTE', 'BARBERO'])
  @Get('/profile')
  getProfile(@UserSession() user: IUserSession) {
    if (!user) throw new BadRequestException('No se ha encontrado el usuario');
    return user;
  }
  @UseGuards(RefreshTokenGuard)
  @Post('/refresh-token')
  refreshToken(@Request() req) {
    return this.authService.refresh(req.user);
  }
}
