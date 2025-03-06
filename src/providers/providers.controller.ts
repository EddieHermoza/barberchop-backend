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
import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { ValidateId } from '../common/pipes/validate-id.pipe';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';

@ApiBearerAuth()
@Auth(['ADMINISTRADOR'])
@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Post()
  create(@Body() createProviderDto: CreateProviderDto) {
    return this.providersService.create(createProviderDto);
  }

  @Get()
  findAll(@Query() params: SearchStatusQueryDto) {
    return this.providersService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id', ValidateId) id: number) {
    return this.providersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ValidateId) id: number,
    @Body() updateProviderDto: UpdateProviderDto,
  ) {
    return this.providersService.update(id, updateProviderDto);
  }

  @Delete(':id')
  remove(@Param('id', ValidateId) id: number) {
    return this.providersService.remove(id);
  }
}
