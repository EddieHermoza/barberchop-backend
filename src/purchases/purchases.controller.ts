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
import { Auth } from 'src/auth/decorators/auth.decorator';
import { UserRole } from '@prisma/client';
import { UserSession } from 'src/common/decorators/user-session.decorator';
import { IUserSession } from 'src/common/interfaces/user-session.interface';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Auth([UserRole.ADMINISTRADOR])
@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post()
  create(
    @UserSession() user: IUserSession,
    @Body() createPurchaseDto: CreatePurchaseDto,
  ) {
    createPurchaseDto.userId = user.id;
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
