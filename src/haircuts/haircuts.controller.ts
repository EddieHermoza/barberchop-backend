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
import { HaircutsService } from './haircuts.service';
import { CreateHaircutDto } from './dto/create-haircut.dto';
import { UpdateHaircutDto } from './dto/update-haircut.dto';
import { ValidateId } from 'src/pipes/validate-id.pipe';
import { QueryProps, ValidateQueryPipe } from 'src/pipes/validate-query.pipe';

@Controller('haircuts')
export class HaircutsController {
  constructor(private readonly haircutsService: HaircutsService) {}

  @Post()
  create(@Body() createHaircutDto: CreateHaircutDto) {
    return this.haircutsService.create(createHaircutDto);
  }

  @Get()
  findAll(@Query(ValidateQueryPipe) params: QueryProps) {
    return this.haircutsService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id', ValidateId) id: number) {
    return this.haircutsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ValidateId) id: number,
    @Body() updateHaircutDto: UpdateHaircutDto,
  ) {
    return this.haircutsService.update(id, updateHaircutDto);
  }

  @Delete(':id')
  remove(@Param('id', ValidateId) id: number) {
    return this.haircutsService.remove(id);
  }
}
