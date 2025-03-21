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
import { ApiBearerAuth } from '@nestjs/swagger';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { UseFileInterceptor } from 'src/common/decorators/file-interceptor.decorator';
import { UploadedImage } from 'src/cloudinary/decorators/upload-images.decorator';

@Auth(['ADMINISTRADOR'])
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiBearerAuth()
  @UseFileInterceptor()
  @Post()
  create(
    @Body() createProductDto: CreateProductDto,
    @UploadedImage() file?: Express.Multer.File,
  ) {
    return this.productsService.create(createProductDto, file);
  }

  @Get('/get-all-products')
  findAll(@Query() params: SearchStatusQueryDto) {
    return this.productsService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id', ValidateId) id: number) {
    return this.productsService.findOne(id);
  }

  @ApiBearerAuth()
  @Patch(':id')
  @UseFileInterceptor()
  update(
    @Param('id', ValidateId) id: number,
    @Body() updateProductDto: UpdateProductDto,
    @UploadedImage() file: Express.Multer.File,
  ) {
    return this.productsService.update(id, updateProductDto, file);
  }

  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id', ValidateId) id: number) {
    return this.productsService.remove(id);
  }
}
