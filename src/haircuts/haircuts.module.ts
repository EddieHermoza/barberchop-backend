import { Module } from '@nestjs/common';
import { HaircutsService } from './haircuts.service';
import { HaircutsController } from './haircuts.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [CloudinaryModule],
  exports: [HaircutsService],
  controllers: [HaircutsController],
  providers: [HaircutsService, PrismaService],
})
export class HaircutsModule {}
