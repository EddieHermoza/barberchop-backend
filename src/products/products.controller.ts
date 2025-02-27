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
import { QueryProps, ValidateQueryPipe } from '../pipes/validate-query.pipe';
import { ValidateId } from '../pipes/validate-id.pipe';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Auth(['ADMINISTRADOR'])
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiBearerAuth()
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @PublicAccess()
  @Get()
  async findAll(@Query(ValidateQueryPipe) params: QueryProps) {
    return this.productsService.findAll(params);
  }

  @PublicAccess()
  @Get(':id')
  async findOne(@Param('id', ValidateId) id: number) {
    return this.productsService.findOne(id);
  }

  @ApiBearerAuth()
  @Patch(':id')
  async update(
    @Param('id', ValidateId) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return await this.productsService.update(id, updateProductDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  async remove(@Param('id', ValidateId) id: number) {
    return this.productsService.remove(id);
  }
}
