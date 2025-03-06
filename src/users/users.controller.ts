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
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';
import { ValidateId } from '../common/pipes/validate-id.pipe';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';

@ApiBearerAuth()
@Auth(['ADMINISTRADOR'])
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const hash = await bcrypt.hash(createUserDto.password, 10);
    const UserDto = { ...createUserDto, password: hash };

    return this.usersService.create(UserDto);
  }

  @Get('/get-customers')
  findAllCustomers(@Query() params: SearchStatusQueryDto) {
    return this.usersService.findAll('CLIENTE', params);
  }

  @Get('/get-admins')
  findAllAdmins(@Query() params: SearchStatusQueryDto) {
    return this.usersService.findAll('ADMINISTRADOR', params);
  }

  @Get(':id')
  findOne(@Param('id', ValidateId) id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ValidateId) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', ValidateId) id: number) {
    return this.usersService.remove(id);
  }
}
