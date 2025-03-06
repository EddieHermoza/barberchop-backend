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
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ValidateId } from 'src/common/pipes/validate-id.pipe';
import { ApiBearerAuth } from '@nestjs/swagger';
import { PublicAccess } from 'src/common/decorators/public.decorator';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';

@ApiBearerAuth()
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.servicesService.create(createServiceDto);
  }

  @PublicAccess()
  @Get()
  findAll(@Query() params: SearchStatusQueryDto) {
    return this.servicesService.findAll(params);
  }

  @PublicAccess()
  @Get(':id')
  findOne(@Param('id', ValidateId) id: number) {
    return this.servicesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ValidateId) id: number,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return this.servicesService.update(id, updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id', ValidateId) id: number) {
    return this.servicesService.remove(id);
  }
}
