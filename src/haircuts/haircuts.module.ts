import { Module } from '@nestjs/common';
import { HaircutsService } from './haircuts.service';
import { HaircutsController } from './haircuts.controller';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  exports: [HaircutsService],
  controllers: [HaircutsController],
  providers: [HaircutsService, CloudinaryService, PrismaService],
})
export class HaircutsModule {}
