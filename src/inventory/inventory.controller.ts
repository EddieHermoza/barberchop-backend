import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateMovementDto } from './dto/create-movement.dto';
import { QueryProps, ValidateQueryPipe } from '../pipes/validate-query.pipe';
import { ValidateId } from '../pipes/validate-id.pipe';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Auth(['ADMINISTRADOR'])
@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  async findAll(@Query(ValidateQueryPipe) params: QueryProps) {
    return this.inventoryService.findAllProductsInventory(params);
  }

  @Post('/movements')
  async create(@Body() createMovementDto: CreateMovementDto) {
    return this.inventoryService.createMovement(createMovementDto);
  }

  @Get('/movements')
  async findAllMovements(@Query(ValidateQueryPipe) params: QueryProps) {
    return this.inventoryService.findAllMovements(params);
  }

  @Get('/movements/:id')
  findOne(@Param('id', ValidateId) id: number) {
    return this.inventoryService.findOneMovement(id);
  }
}
