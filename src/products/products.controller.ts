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
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ValidateId } from '../common/pipes/validate-id.pipe';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { PublicAccess } from 'src/common/decorators/public.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';

@Auth(['ADMINISTRADOR'])
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiBearerAuth()
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @PublicAccess()
  @Get()
  findAll(@Query() params: SearchStatusQueryDto) {
    return this.productsService.findAll(params);
  }

  @PublicAccess()
  @Get(':id')
  findOne(@Param('id', ValidateId) id: number) {
    return this.productsService.findOne(id);
  }

  @ApiBearerAuth()
  @Patch(':id')
  update(
    @Param('id', ValidateId) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id', ValidateId) id: number) {
    return this.productsService.remove(id);
  }
}
