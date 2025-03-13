import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcryptjs';
import { ValidateId } from '../common/pipes/validate-id.pipe';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { CreateClientDto } from './dto/create-client.dto';
import { CreateBarberDto } from './dto/create-barber.dto';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { UseFileInterceptor } from 'src/common/decorators/file-interceptor.decorator';
import { UploadedImage } from 'src/cloudinary/decorators/upload-images.decorator';

@ApiBearerAuth()
@Auth(['ADMINISTRADOR'])
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create-customer')
  async createCustomer(@Body() createClientDto: CreateClientDto) {
    const hash = await bcrypt.hash(createClientDto.password, 10);
    const UserDto = { ...createClientDto, password: hash };

    return this.usersService.createClientUser(UserDto);
  }

  @UseFileInterceptor()
  @Post('/create-barber')
  async createBarber(
    @Body() createBarberDto: CreateBarberDto,
    @UploadedImage() file: Express.Multer.File,
  ) {
    const hash = await bcrypt.hash(createBarberDto.password, 10);
    const UserDto = { ...createBarberDto, password: hash };

    return this.usersService.createBarberUser(UserDto, file);
  }

  @Post('/create-admin')
  async createAdmin(@Body() createAdminDto: CreateAdminDto) {
    const hash = await bcrypt.hash(createAdminDto.password, 10);
    const UserDto = { ...createAdminDto, password: hash };

    return this.usersService.createAdminUser(UserDto);
  }

  @Get('/get-customers')
  findAllCustomers(@Query() params: SearchStatusQueryDto) {
    return this.usersService.findAll('CLIENTE', params);
  }

  @Get('/get-admins')
  findAllAdmins(@Query() params: SearchStatusQueryDto) {
    return this.usersService.findAll('ADMINISTRADOR', params);
  }

  @Get('/get-barbers')
  findAllBarbers(@Query() params: SearchStatusQueryDto) {
    return this.usersService.findAll('BARBERO', params);
  }

  @Get(':id')
  findOne(@Param('id', ValidateId) id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id/update-customer')
  updateCustomer(
    @Param('id', ValidateId) id: number,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.usersService.updateClient(id, updateClientDto);
  }

  @UseFileInterceptor()
  @Patch(':id/update-barber')
  updateBarber(
    @Param('id', ValidateId) id: number,
    @Body() updateBarberDto: UpdateBarberDto,
    @UploadedImage() file: Express.Multer.File,
  ) {
    return this.usersService.updateBarber(id, updateBarberDto, file);
  }

  @Patch(':id/update-admin')
  updateAdmin(
    @Param('id', ValidateId) id: number,
    @Body() UpdateAdminDto: UpdateAdminDto,
  ) {
    return this.usersService.updateAdmin(id, UpdateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id', ValidateId) id: number) {
    return this.usersService.remove(id);
  }
}
