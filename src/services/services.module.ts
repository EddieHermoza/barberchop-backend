import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  exports: [ServicesService],
  imports: [CloudinaryModule],
  controllers: [ServicesController],
  providers: [ServicesService, CloudinaryService, PrismaService],
})
export class ServicesModule {}
