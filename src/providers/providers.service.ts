import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';

@Injectable()
export class ProvidersService {
  constructor(private readonly db: PrismaService) {}

  async create(createProviderDto: CreateProviderDto) {
    return await this.db.provider.create({
      data: createProviderDto,
    });
  }

  async findAll({ limit, page, query, status }: SearchStatusQueryDto) {
    const pages = page || 1;
    const skip = (pages - 1) * limit;

    return await this.db.provider.findMany({
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
    const provider = await this.db.provider.findFirst({
      where: {
        id,
        isArchived: false,
      },
    });

    if (!provider)
      throw new NotFoundException(`El proveedor del id ${id} no existe`);

    return provider;
  }

  async update(id: number, updateProviderDto: UpdateProviderDto) {
    try {
      const updatedProvider = await this.db.provider.update({
        where: {
          id,
          isArchived: false,
        },
        data: updateProviderDto,
      });
      return updatedProvider;
    } catch (error) {
      if (error.code === 'P2025')
        throw new NotFoundException(`El proveedor del id ${id} no existe`);

      throw error;
    }
  }

  async remove(id: number) {
    try {
      const archivedProvider = await this.db.provider.update({
        where: {
          id,
        },
        data: {
          isActive: false,
          isArchived: true,
        },
      });
      if (archivedProvider)
        return { message: `El proveedor con el ID ${id} fue archivado` };
    } catch (error: any) {
      if (error.code === 'P2025')
        throw new NotFoundException(`El proveedor del id ${id} no existe`);

      throw error;
    }
  }
}
