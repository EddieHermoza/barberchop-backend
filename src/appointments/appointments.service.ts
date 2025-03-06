import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServicesService } from 'src/services/services.service';
import { BarbersService } from 'src/barbers/barbers.service';
import { UsersService } from 'src/users/users.service';
import { endOfDay, startOfDay } from 'date-fns';
import { AppointmentQueryDto } from './dto/appointment-query.dto';
import { AppointmentStatus } from '@prisma/client';

@Injectable()
export class AppointmentsService {
  constructor(
    private readonly db: PrismaService,
    private readonly servicesService: ServicesService,
    private readonly barbersService: BarbersService,
    private readonly usersService: UsersService,
  ) {}
  async create(createAppointmentDto: CreateAppointmentDto) {
    const { userId, barberId, serviceId } = createAppointmentDto;
    try {
      await Promise.all([
        this.servicesService.findOne(serviceId),
        this.barbersService.findOne(barberId),
        this.usersService.findOne(userId),
      ]);

      const newAppointment = await this.db.appointment.create({
        data: createAppointmentDto,
      });
      return newAppointment;
    } catch (error: any) {
      throw error;
    }
  }

  async findAll({
    limit,
    page,
    from_date,
    status,
    to_date,
  }: AppointmentQueryDto) {
    const pages = page || 1;
    const skip = (pages - 1) * limit;
    return await this.db.appointment.findMany({
      where: {
        scheduledAt: {
          ...(from_date ? { gte: from_date } : {}),
          ...(to_date ? { lte: to_date } : {}),
        },
        ...(status ? { status: status } : {}),
        isArchived: false,
      },
      take: limit,
      skip: skip,
    });
  }

  async findOne(id: number) {
    const appointment = await this.db.appointment.findFirst({
      where: {
        id,
        isArchived: false,
      },
    });
    if (!appointment) throw new NotFoundException('No se encontro la cita');
    return appointment;
  }

  async update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    try {
      const updatedAppointment = await this.db.appointment.update({
        where: {
          id,
          isArchived: false,
        },
        data: updateAppointmentDto,
      });
      return updatedAppointment;
    } catch (error) {
      if (error.code === 'P2025')
        throw new NotFoundException('No se encontró la cita');

      throw error;
    }
  }

  async remove(id: number) {
    try {
      const deleteAppointment = await this.db.appointment.update({
        where: {
          id,
        },
        data: {
          isArchived: true,
        },
      });
      return deleteAppointment;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`La cita del id ${id} no existe`);
      }
      throw error;
    }
  }

  async findAppointmentsByDay(date: Date) {
    const start = startOfDay(date);
    const end = endOfDay(date);
    const appointments = await this.db.appointment.findMany({
      where: {
        scheduledAt: {
          gte: start,
          lt: end,
        },
        isArchived: false,
      },
    });
    return appointments;
  }

  async findAppointmentsToday() {
    const now = new Date();

    const today = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
    );

    const tomorrow = new Date(today);
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);

    const appointments = await this.db.appointment.findMany({
      where: {
        scheduledAt: {
          gte: today,
          lt: tomorrow,
        },
        isArchived: false,
      },
    });
    return appointments;
  }

  async findAppointmentsByBarber(id: number) {
    const appointments = await this.db.appointment.findMany({
      where: {
        barberId: id,
        isArchived: false,
      },
    });

    return appointments;
  }

  async findAppointmentsByUser(id: number) {
    const appointments = await this.db.appointment.findMany({
      where: {
        userId: id,
        isArchived: false,
      },
    });

    return appointments;
  }

  async updateStatus(id: number, status: AppointmentStatus) {
    try {
      const updatedAppointment = await this.db.appointment.update({
        where: {
          id,
          isArchived: false,
        },
        data: {
          status,
        },
      });
      return updatedAppointment;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`La cita del id ${id} no existe`);
      }
      throw error;
    }
  }
}
