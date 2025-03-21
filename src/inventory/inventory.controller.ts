import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateMovementDto } from './dto/create-movement.dto';
import { ValidateId } from '../common/pipes/validate-id.pipe';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { MovementQueryDto } from './dto/movement-query.dto';
import { PublicAccess } from 'src/common/decorators/public.decorator';
import { ProductCategoryQueryDto } from './dto/product-category-query.dto';

@ApiBearerAuth()
@Auth(['ADMINISTRADOR'])
@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @PublicAccess()
  @Get('/get-availaible-products')
  findAvailaibleProducts(@Query() params: ProductCategoryQueryDto) {
    return this.inventoryService.findAvailaibleProducts(params);
  }

  @Get('/get-inventory')
  findAll(@Query() params: SearchStatusQueryDto) {
    return this.inventoryService.findAllProductsInventory(params);
  }

  @Post('/movements')
  create(@Body() createMovementDto: CreateMovementDto) {
    return this.inventoryService.createMovement(createMovementDto);
  }

  @Get('/movements')
  findAllMovements(@Query() params: MovementQueryDto) {
    return this.inventoryService.findAllMovements(params);
  }

  @Get('/movements/:id')
  findOne(@Param('id', ValidateId) id: number) {
    return this.inventoryService.findOneMovement(id);
  }
}
