import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServicesService } from 'src/services/services.service';
import { UsersService } from 'src/users/users.service';
import { AppointmentQueryDto } from './dto/appointment-query.dto';
import { AppointmentStatus } from '@prisma/client';
export declare class AppointmentsService {
    private readonly db;
    private readonly servicesService;
    private readonly usersService;
    constructor(db: PrismaService, servicesService: ServicesService, usersService: UsersService);
    create(createAppointmentDto: CreateAppointmentDto): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        userId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }>;
    findAll({ limit, page, from_date, status, to_date, }: AppointmentQueryDto): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        userId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        userId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }>;
    update(id: number, updateAppointmentDto: UpdateAppointmentDto): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        userId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findAppointmentsByDay(date: Date): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        userId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }[]>;
    findAppointmentsToday(): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        userId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }[]>;
    findAppointmentsByBarber(id: number): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        userId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }[]>;
    findAppointmentsByUser(id: number): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        userId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }[]>;
    updateStatus(id: number, status: AppointmentStatus): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        userId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }>;
}
