import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';

@Injectable()
export class ServicesService {
  constructor(private readonly db: PrismaService) {}
  async create(createServiceDto: CreateServiceDto) {
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

  async update(id: number, updateServiceDto: UpdateServiceDto) {
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
