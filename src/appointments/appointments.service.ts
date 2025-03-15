import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServicesService } from 'src/services/services.service';
import { UsersService } from 'src/users/users.service';
import { endOfDay, startOfDay } from 'date-fns';
import { AppointmentQueryDto } from './dto/appointment-query.dto';
import { AppointmentStatus } from '@prisma/client';
import { formatTime, generateSlots } from './helpers/slot-utils';
import {
  SCHEDULE_BLOCKS,
  SESSION_DURATION,
} from './constants/schedule.constants';
import { Slot } from './interfaces/slot.interface';

@Injectable()
export class AppointmentsService {
  constructor(
    private readonly db: PrismaService,
    private readonly servicesService: ServicesService,
    private readonly usersService: UsersService,
  ) {}
  async create(createAppointmentDto: CreateAppointmentDto) {
    const { customerId, serviceId, barberId } = createAppointmentDto;
    try {
      const service = await this.servicesService.findOne(serviceId);
      const Customer = await this.usersService.findCustomer(customerId);
      const { Barber } = await this.usersService.findBarber(barberId);

      if (!service.isActive)
        throw new NotFoundException('El servicio no esta disponible');

      if (!Customer.isActive)
        throw new NotFoundException('El cliente no esta habilitado');

      if (!Barber.isActive)
        throw new NotFoundException('El barbero no esta habilitado');

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
      const arhivedAppointment = await this.db.appointment.update({
        where: {
          id,
        },
        data: {
          isArchived: true,
        },
      });
      if (arhivedAppointment)
        return { message: `La cita con el ID ${id} fue archivada` };
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
        customerId: id,
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

  async getAvailability(
    barberId: number,
    date: string,
  ): Promise<{ slots: Slot[] }> {
    const queryDate = new Date(date);
    const allSlots: Slot[] = [];

    SCHEDULE_BLOCKS.forEach((block) => {
      const blockStart = new Date(queryDate);
      blockStart.setHours(block.startHour, 0, 0, 0);

      const blockEnd = new Date(queryDate);
      blockEnd.setHours(block.endHour, 0, 0, 0);

      const slots = generateSlots(blockStart, blockEnd);
      allSlots.push(...slots);
    });

    const dayStart = startOfDay(queryDate);
    const dayEnd = endOfDay(queryDate);

    const appointments = await this.db.appointment.findMany({
      where: {
        barberId,
        scheduledAt: {
          gte: dayStart,
          lt: dayEnd,
        },
        isArchived: false,
      },
    });

    const reservedSet = new Set<string>();
    appointments.forEach((app) => {
      const startTime = new Date(app.scheduledAt);
      const sessionEnd = new Date(
        startTime.getTime() + SESSION_DURATION * 60000,
      );
      const reservedRange = `${formatTime(startTime)} - ${formatTime(sessionEnd)}`;
      reservedSet.add(reservedRange);
    });

    allSlots.forEach((slot) => {
      if (reservedSet.has(slot.range)) {
        slot.available = false;
      }
    });

    return { slots: allSlots };
  }
}
