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
import { BarbersService } from './barbers.service';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { ValidateId } from 'src/common/pipes/validate-id.pipe';
import { ApiBearerAuth } from '@nestjs/swagger';
import { PublicAccess } from 'src/common/decorators/public.decorator';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';

@ApiBearerAuth()
@Controller('barbers')
export class BarbersController {
  constructor(private readonly barbersService: BarbersService) {}

  @Post()
  create(@Body() createBarberDto: CreateBarberDto) {
    return this.barbersService.create(createBarberDto);
  }

  @PublicAccess()
  @Get()
  findAll(@Query() params: SearchStatusQueryDto) {
    return this.barbersService.findAll(params);
  }

  @PublicAccess()
  @Get(':id')
  findOne(@Param('id', ValidateId) id: number) {
    return this.barbersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ValidateId) id: number,
    @Body() updateBarberDto: UpdateBarberDto,
  ) {
    return this.barbersService.update(id, updateBarberDto);
  }

  @Delete(':id')
  remove(@Param('id', ValidateId) id: number) {
    return this.barbersService.remove(id);
  }
}
