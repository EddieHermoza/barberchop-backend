import { Module } from '@nestjs/common';
import { BarbersService } from './barbers.service';
import { BarbersController } from './barbers.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  exports: [BarbersService],
  controllers: [BarbersController],
  providers: [BarbersService, CloudinaryService, PrismaService],
})
export class BarbersModule {}
