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
import { ValidateId } from 'src/common/pipes/validate-id.pipe';
import { ApiBearerAuth } from '@nestjs/swagger';
import { PublicAccess } from 'src/common/decorators/public.decorator';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { UploadedImages } from 'src/cloudinary/decorators/upload-images.decorator';
import { UseFilesInterceptor } from 'src/common/decorators/file-interceptor.decorator';
import { SearchQueryDto } from 'src/common/dto/search-query.dto';

@ApiBearerAuth()
@Controller('haircuts')
export class HaircutsController {
  constructor(
    private readonly haircutsService: HaircutsService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Post()
  @UseFilesInterceptor()
  create(
    @UploadedImages() files: Express.Multer.File[],
    @Body() createHaircutDto: CreateHaircutDto,
  ) {
    return this.haircutsService.create(createHaircutDto, files);
  }

  @Get('/get-all-haircuts')
  findAll(@Query() params: SearchStatusQueryDto) {
    return this.haircutsService.findAll(params);
  }

  @PublicAccess()
  @Get('/get-all-haircuts')
  findAvailaibleHaircuts(@Query() params: SearchQueryDto) {
    return this.haircutsService.findAll(params);
  }

  @PublicAccess()
  @Get(':id')
  findOne(@Param('id', ValidateId) id: number) {
    return this.haircutsService.findOne(id);
  }

  @Patch(':id')
  @UseFilesInterceptor()
  update(
    @UploadedImages() files: Express.Multer.File[],
    @Param('id', ValidateId) id: number,
    @Body() updateHaircutDto: UpdateHaircutDto,
  ) {
    return this.haircutsService.update(id, updateHaircutDto, files);
  }

  @Delete(':id')
  remove(@Param('id', ValidateId) id: number) {
    return this.haircutsService.remove(id);
  }
}
