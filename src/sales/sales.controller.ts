import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { QueryProps, ValidateQueryPipe } from 'src/pipes/validate-query.pipe';
import { ValidateId } from 'src/pipes/validate-id.pipe';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }

  @Get()
  findAll(@Query(ValidateQueryPipe) params: QueryProps) {
    return this.salesService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id', ValidateId) id: number) {
    return this.salesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ValidateId) id: number) {
    return this.salesService.remove(id);
  }
}
