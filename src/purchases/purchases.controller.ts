import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { QueryProps, ValidateQueryPipe } from 'src/pipes/validate-query.pipe';
import { ValidateId } from 'src/pipes/validate-id.pipe';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post()
  create(@Body() createPurchaseDto: CreatePurchaseDto) {
    return this.purchasesService.create(createPurchaseDto);
  }

  @Get()
  findAll(@Query(ValidateQueryPipe) params: QueryProps) {
    return this.purchasesService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id', ValidateId) id: number) {
    return this.purchasesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ValidateId) id: number) {
    return this.purchasesService.remove(id);
  }
}
