import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryProps } from 'src/pipes/validate-query.pipe';
import { Prisma } from '@prisma/client';

@Injectable()
export class BarbersService {
  constructor(private readonly db: PrismaService) {}
  async create(createBarberDto: CreateBarberDto) {
    return await this.db.barber.create({
      data: createBarberDto,
    });
  }

  findAll({ limit, page, query, status }: QueryProps) {
    const pages = page || 1;
    const skip = (pages - 1) * limit;

    return this.db.barber.findMany({
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
    const barber = await this.db.barber.findUnique({
      where: {
        id,
        isArchived: false,
      },
    });
    if (!barber) {
      throw new NotFoundException(`El barbero del id ${id} no existe`);
    }
    return barber;
  }

  async update(id: number, updateBarberDto: UpdateBarberDto) {
    try {
      const updateBarber = await this.db.barber.update({
        where: {
          id,
          isArchived: false,
        },
        data: updateBarberDto,
      });
      return updateBarber;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`El barbero del id ${id} no existe`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const deleteBarber = await this.db.barber.update({
        where: {
          id,
        },
        data: {
          isActive: false,
          isArchived: true,
        },
      });
      return deleteBarber;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`El barbero del id ${id} no existe`);
      }
      throw error;
    }
  }
}
