import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServicesService } from 'src/services/services.service';
import { UsersService } from 'src/users/users.service';
import { AppointmentQueryDto } from './dto/appointment-query.dto';
import { AppointmentStatus } from '@prisma/client';
import { Slot } from './interfaces/slot.interface';
export declare class AppointmentsService {
    private readonly db;
    private readonly servicesService;
    private readonly usersService;
    constructor(db: PrismaService, servicesService: ServicesService, usersService: UsersService);
    create(createAppointmentDto: CreateAppointmentDto): Promise<{
        id: number;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        customerId: number;
        serviceId: number;
        barberId: number;
        created: Date;
        scheduledAt: Date;
        notes: string | null;
    }>;
    findAll({ limit, page, from_date, status, to_date, }: AppointmentQueryDto): Promise<{
        id: number;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        customerId: number;
        serviceId: number;
        barberId: number;
        created: Date;
        scheduledAt: Date;
        notes: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        customerId: number;
        serviceId: number;
        barberId: number;
        created: Date;
        scheduledAt: Date;
        notes: string | null;
    }>;
    update(id: number, updateAppointmentDto: UpdateAppointmentDto): Promise<{
        id: number;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        customerId: number;
        serviceId: number;
        barberId: number;
        created: Date;
        scheduledAt: Date;
        notes: string | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findAppointmentsByDay(date: Date): Promise<{
        id: number;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        customerId: number;
        serviceId: number;
        barberId: number;
        created: Date;
        scheduledAt: Date;
        notes: string | null;
    }[]>;
    findAppointmentsToday(): Promise<{
        id: number;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        customerId: number;
        serviceId: number;
        barberId: number;
        created: Date;
        scheduledAt: Date;
        notes: string | null;
    }[]>;
    findAppointmentsByBarber(id: number): Promise<{
        id: number;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        customerId: number;
        serviceId: number;
        barberId: number;
        created: Date;
        scheduledAt: Date;
        notes: string | null;
    }[]>;
    findAppointmentsByUser(id: number): Promise<{
        id: number;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        customerId: number;
        serviceId: number;
        barberId: number;
        created: Date;
        scheduledAt: Date;
        notes: string | null;
    }[]>;
    updateStatus(id: number, status: AppointmentStatus): Promise<{
        id: number;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        customerId: number;
        serviceId: number;
        barberId: number;
        created: Date;
        scheduledAt: Date;
        notes: string | null;
    }>;
    getAvailability(barberId: number, date: string): Promise<{
        slots: Slot[];
    }>;
}
