import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class ServicesService {
  constructor(
    private readonly db: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}
  async create(createServiceDto: CreateServiceDto, file?: Express.Multer.File) {
    createServiceDto.img = await this.cloudinaryService.uploadImage(file);
    return await this.db.service.create({
      data: createServiceDto,
    });
  }

  findAll({ limit, page, query, status }: SearchStatusQueryDto) {
    const pages = page || 1;
    const skip = (pages - 1) * limit;

    return this.db.service.findMany({
      where: {
        AND: [
          query
            ? { name: { contains: query, mode: Prisma.QueryMode.insensitive } }
            : {},
          status !== null && status !== undefined ? { isActive: status } : {},
        ],
        isArchived: false,
      },
      skip: skip,
      take: limit,
    });
  }

  async findOne(id: number) {
    const service = await this.db.service.findUnique({
      where: {
        id,
        isArchived: false,
      },
    });

    if (!service) {
      throw new NotFoundException(`El servicio del id ${id} no existe`);
    }
    return service;
  }

  async update(
    id: number,
    updateServiceDto: UpdateServiceDto,
    file?: Express.Multer.File,
  ) {
    updateServiceDto.img = await this.cloudinaryService.uploadImage(file);
    try {
      const updateService = await this.db.service.update({
        where: {
          id,
          isArchived: false,
        },
        data: updateServiceDto,
      });
      return updateService;
    } catch (error) {
      if (error.code === 'P2025')
        throw new NotFoundException(`El servicio del id ${id} no existe`);

      throw error;
    }
  }

  async remove(id: number) {
    try {
      const archivedService = await this.db.service.update({
        where: {
          id,
        },
        data: {
          isActive: false,
          isArchived: true,
        },
      });
      if (archivedService)
        return { message: `El servicio con el ID ${id} fue archivado` };
    } catch (error) {
      if (error.code === 'P2025')
        throw new NotFoundException(`El servicio del id ${id} no existe`);

      throw error;
    }
  }
}
