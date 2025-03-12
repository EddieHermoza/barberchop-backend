import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
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
import { FilesInterceptor } from '@nestjs/platform-express';

@ApiBearerAuth()
@Controller('haircuts')
export class HaircutsController {
  constructor(
    private readonly haircutsService: HaircutsService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  async create(
    @UploadedImages() files: Express.Multer.File[],
    @Body() createHaircutDto: CreateHaircutDto,
  ) {
    if (files && files.length > 0) {
      const uploadedImages = await this.cloudinaryService.uploadFiles(files);
      const urls = uploadedImages.map((img) => img.secure_url);
      createHaircutDto.imgs = urls;
    }
    return this.haircutsService.create(createHaircutDto);
  }

  @PublicAccess()
  @Get()
  findAll(@Query() params: SearchStatusQueryDto) {
    return this.haircutsService.findAll(params);
  }

  @PublicAccess()
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
