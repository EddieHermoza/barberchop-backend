import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, UserRole } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { CreateAdminDto } from './dto/create-admin.dto';
import { CreateClientDto } from './dto/create-client.dto';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly db: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async createAdminUser(createAdminDto: CreateAdminDto) {
    return await this.db.user.create({
      data: {
        ...createAdminDto,
        role: UserRole.ADMINISTRADOR,
        Admin: {
          create: {},
        },
      },
    });
  }

  async createClientUser(createClientDto: CreateClientDto) {
    const { number } = createClientDto;
    return await this.db.user.create({
      data: {
        ...createClientDto,
        role: UserRole.CLIENTE,
        Customer: {
          create: { number },
        },
      },
    });
  }

  async createBarberUser(
    createBarberDto: CreateBarberDto,
    file?: Express.Multer.File,
  ) {
    createBarberDto.img = await this.cloudinaryService.uploadImage(file);
    const { skills, isActiveBarber, img, ...userData } = createBarberDto;
    return await this.db.user.create({
      data: {
        ...userData,
        role: UserRole.BARBERO,
        Barber: {
          create: { skills, isActive: isActiveBarber, img },
        },
      },
    });
  }

  async findAll(
    role: UserRole,
    { limit, query, status, page }: SearchStatusQueryDto,
  ) {
    const pages = page || 1;
    const skip = (pages - 1) * limit;

    const roleFilter = role
      ? role === UserRole.ADMINISTRADOR
        ? { Admin: { isArchived: false } }
        : role === UserRole.BARBERO
          ? { Barber: { isArchived: false } }
          : role === UserRole.CLIENTE
            ? { Customer: { isArchived: false } }
            : {}
      : {};

    return await this.db.user.findMany({
      omit: {
        password: true,
      },
      include: {
        Admin: true,
        Customer: true,
        Barber: true,
      },
      where: {
        AND: [
          query
            ? { name: { contains: query, mode: Prisma.QueryMode.insensitive } }
            : {},
          status !== null && status !== undefined ? { isActive: status } : {},
          roleFilter,
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

  async findBarber(id: number) {
    const user = await this.db.user.findFirst({
      where: {
        id,
        isArchived: false,
        Barber: {
          isArchived: false,
        },
      },
      include: {
        Barber: true,
      },
    });

    if (!user) throw new NotFoundException(`El usuario del id ${id} no existe`);

    return user;
  }

  async findAdmin(id: number) {
    const user = await this.db.user.findFirst({
      where: {
        id,
        isArchived: false,
        Admin: {
          isArchived: false,
        },
      },
      include: {
        Admin: true,
      },
    });

    if (!user) throw new NotFoundException(`El usuario del id ${id} no existe`);

    return user;
  }

  async findCustomer(id: number) {
    const user = await this.db.user.findFirst({
      where: {
        id,
        isArchived: false,
        Customer: {
          isArchived: false,
        },
      },
      include: {
        Customer: true,
      },
    });

    if (!user) throw new NotFoundException(`El usuario del id ${id} no existe`);

    return user;
  }

  async updateAdmin(id: number, updateAdminDto: UpdateAdminDto) {
    try {
      const user = await this.db.user.findUnique({
        where: { id },
        include: { Admin: true },
      });

      if (!user || !user.Admin) {
        throw new NotFoundException(
          `El usuario del id ${id} no existe o no es un administrador`,
        );
      }

      const updatedUser = await this.db.user.update({
        where: {
          id,
          isArchived: false,
        },
        data: {
          ...updateAdminDto,
          Admin: {
            update: {},
          },
        },
      });
      return updatedUser;
    } catch (error) {
      if ((error.code = 'P2025'))
        throw new NotFoundException(`El usuario del id ${id} no existe`);

      throw error;
    }
  }

  async updateBarber(
    id: number,
    updateBarberDto: UpdateBarberDto,
    file?: Express.Multer.File,
  ) {
    updateBarberDto.img = await this.cloudinaryService.uploadImage(file);
    const { skills, isActiveBarber } = updateBarberDto;
    try {
      const user = await this.db.user.findUnique({
        where: { id },
        include: { Barber: true },
      });

      if (!user || !user.Barber) {
        throw new NotFoundException(
          `El usuario del id ${id} no existe o no es un barber`,
        );
      }

      const updatedUser = await this.db.user.update({
        where: {
          id,
          isArchived: false,
        },
        data: {
          ...updateBarberDto,
          Barber: {
            update: {
              ...(skills ? { skills } : {}),
              ...(isActiveBarber ? { isActive: isActiveBarber } : {}),
            },
          },
        },
      });
      return updatedUser;
    } catch (error) {
      if ((error.code = 'P2025'))
        throw new NotFoundException(`El usuario del id ${id} no existe`);

      throw error;
    }
  }

  async updateClient(id: number, updateClientDto: UpdateClientDto) {
    const { number } = updateClientDto;
    try {
      const user = await this.db.user.findUnique({
        where: { id },
        include: { Customer: true },
      });

      if (!user || !user.Customer) {
        throw new NotFoundException(
          `El usuario del id ${id} no existe o no es un cliente`,
        );
      }

      const updatedUser = await this.db.user.update({
        where: {
          id,
          isArchived: false,
        },
        data: {
          ...updateClientDto,
          Customer: {
            update: {
              ...(number ? { number } : {}),
            },
          },
        },
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
      const user = await this.db.user.findUnique({
        where: { id },
        include: { Admin: true, Barber: true, Customer: true },
      });

      if (!user) {
        throw new NotFoundException(`El usuario del id ${id} no existe`);
      }

      const updateData: any = {
        isActive: false,
        isArchived: true,
      };

      if (user.Admin) {
        updateData.Admin = {
          update: {
            isActive: false,
            isArchived: true,
          },
        };
      }

      if (user.Barber) {
        updateData.Barber = {
          update: {
            isActive: false,
            isArchived: true,
          },
        };
      }

      if (user.Customer) {
        updateData.Client = {
          update: {
            isActive: false,
            isArchived: true,
          },
        };
      }

      const archivedUser = await this.db.user.update({
        where: { id },
        data: updateData,
      });

      if (archivedUser)
        return { message: `El usuario con el ID ${id} fue archivado` };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`El usuario del id ${id} no existe`);
      }

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
