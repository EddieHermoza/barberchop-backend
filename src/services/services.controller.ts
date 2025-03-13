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
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ValidateId } from 'src/common/pipes/validate-id.pipe';
import { ApiBearerAuth } from '@nestjs/swagger';
import { PublicAccess } from 'src/common/decorators/public.decorator';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { UseFileInterceptor } from 'src/common/decorators/file-interceptor.decorator';
import { UploadedImage } from 'src/cloudinary/decorators/upload-images.decorator';

@ApiBearerAuth()
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @UseFileInterceptor()
  @Post()
  create(
    @Body() createServiceDto: CreateServiceDto,
    @UploadedImage() file: Express.Multer.File,
  ) {
    return this.servicesService.create(createServiceDto, file);
  }

  @PublicAccess()
  @Get()
  findAll(@Query() params: SearchStatusQueryDto) {
    return this.servicesService.findAll(params);
  }

  @PublicAccess()
  @Get(':id')
  findOne(@Param('id', ValidateId) id: number) {
    return this.servicesService.findOne(id);
  }

  @UseFileInterceptor()
  @Patch(':id')
  update(
    @Param('id', ValidateId) id: number,
    @Body() updateServiceDto: UpdateServiceDto,
    @UploadedImage() file: Express.Multer.File,
  ) {
    return this.servicesService.update(id, updateServiceDto, file);
  }

  @Delete(':id')
  remove(@Param('id', ValidateId) id: number) {
    return this.servicesService.remove(id);
  }
}
