import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHaircutDto } from './dto/create-haircut.dto';
import { UpdateHaircutDto } from './dto/update-haircut.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';

@Injectable()
export class HaircutsService {
  constructor(private readonly db: PrismaService) {}
  async create(createHaircutDto: CreateHaircutDto) {
    return await this.db.haircutType.create({
      data: createHaircutDto,
    });
  }

  findAll({ limit, page, query, status }: SearchStatusQueryDto) {
    const pages = page || 1;
    const skip = (pages - 1) * limit;

    return this.db.haircutType.findMany({
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
    const haircut = await this.db.haircutType.findUnique({
      where: {
        id,
        isArchived: false,
      },
    });

    if (!haircut) {
      throw new NotFoundException(`El corte de cabello del id ${id} no existe`);
    }

    return haircut;
  }

  async update(id: number, updateHaircutDto: UpdateHaircutDto) {
    try {
      const updateHaircut = await this.db.haircutType.update({
        where: {
          id,
          isArchived: false,
        },
        data: updateHaircutDto,
      });
      return updateHaircut;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(
          `El corte de cabello del id ${id} no existe`,
        );
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const archivedHaircut = await this.db.haircutType.update({
        where: {
          id,
        },
        data: {
          isActive: false,
          isArchived: true,
        },
      });
      if (archivedHaircut)
        return { message: `El corte con el ID ${id} fue archivado` };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(
          `El corte de cabello del id ${id} no existe`,
        );
      }
      throw error;
    }
  }
}
