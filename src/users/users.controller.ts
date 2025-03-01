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
import { formatDate } from '../lib/utils';
import { ValidateId } from '../pipes/validate-id.pipe';
import { QueryProps, ValidateQueryPipe } from '../pipes/validate-query.pipe';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

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
  async findAllCustomers(@Query(ValidateQueryPipe) params: QueryProps) {
    const users = await this.usersService.findAll('CLIENTE', params);

    const formattedUsers = users.map((user) => ({
      ...user,
      created: formatDate(new Date(user.created)),
      updated: formatDate(new Date(user.updated)),
    }));

    return formattedUsers;
  }

  @Get('/get-admins')
  async findAllAdmins(@Query(ValidateQueryPipe) params: QueryProps) {
    const users = await this.usersService.findAll('ADMINISTRADOR', params);

    const formattedUsers = users.map((user) => ({
      ...user,
      created: formatDate(new Date(user.created)),
      updated: formatDate(new Date(user.updated)),
    }));

    return formattedUsers;
  }

  @Get(':id')
  async findOne(@Param('id', ValidateId) id: number) {
    return await this.usersService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ValidateId) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id', ValidateId) id: number) {
    return await this.usersService.remove(id);
  }
}
