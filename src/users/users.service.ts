import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, UserRole } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';

@Injectable()
export class UsersService {
  constructor(private readonly db: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.db.user.create({
      data: createUserDto,
    });
  }

  async findAll(
    role: UserRole,
    { limit, query, status, page }: SearchStatusQueryDto,
  ) {
    const pages = page || 1;
    const skip = (pages - 1) * limit;

    return await this.db.user.findMany({
      where: {
        AND: [
          query
            ? { name: { contains: query, mode: Prisma.QueryMode.insensitive } }
            : {},
          status !== null && status !== undefined ? { isActive: status } : {},
          role ? { role: role } : {},
        ],
        isArchived: false,
      },
      skip: skip,
      take: limit,
    });
  }

  async findOne(id: number) {
    const user = await this.db.user.findFirst({
      where: {
        id,
        isArchived: false,
      },
    });

    if (!user) throw new NotFoundException(`El usuario del id ${id} no existe`);

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const updatedUser = await this.db.user.update({
        where: {
          id,
          isArchived: false,
        },
        data: updateUserDto,
      });
      return updatedUser;
    } catch (error) {
      if ((error.code = 'P2025'))
        throw new NotFoundException(`El usuario del id ${id} no existe`);

      throw error;
    }
  }

  async remove(id: number) {
    try {
      const archivedUser = await this.db.user.update({
        where: {
          id,
        },
        data: {
          isActive: false,
          isArchived: true,
        },
      });
      return archivedUser;
    } catch (error) {
      if ((error.code = 'P2025'))
        throw new NotFoundException(`El usuario del id ${id} no existe`);

      throw error;
    }
  }

  async findOneByEmail(email: string) {
    const user = await this.db.user.findFirst({
      where: {
        email,
        isActive: true,
        isArchived: false,
      },
    });

    if (!user)
      throw new NotFoundException(`El usuario del email ${email} no existe`);

    return user;
  }
}
