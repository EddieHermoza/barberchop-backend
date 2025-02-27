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
import { Auth } from 'src/auth/decorators/auth.decorator';
import { UserRole } from '@prisma/client';
import { UserSession } from 'src/common/decorators/user-session.decorator';
import { IUserSession } from 'src/common/interfaces/user-session.interface';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Auth([UserRole.CLIENTE, UserRole.ADMINISTRADOR])
@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  create(
    @UserSession() user: IUserSession,
    @Body() createSaleDto: CreateSaleDto,
  ) {
    createSaleDto.userId = user.id;
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

  @Auth([UserRole.ADMINISTRADOR])
  @Delete(':id')
  remove(@Param('id', ValidateId) id: number) {
    return this.salesService.remove(id);
  }
}
