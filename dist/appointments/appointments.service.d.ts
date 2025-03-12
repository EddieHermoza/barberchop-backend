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
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        notes: string | null;
        isArchived: boolean;
    }>;
    findAll({ limit, page, from_date, status, to_date, }: AppointmentQueryDto): Promise<{
        id: number;
        created: Date;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        notes: string | null;
        isArchived: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        created: Date;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        notes: string | null;
        isArchived: boolean;
    }>;
    update(id: number, updateAppointmentDto: UpdateAppointmentDto): Promise<{
        id: number;
        created: Date;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        notes: string | null;
        isArchived: boolean;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findAppointmentsByDay(date: Date): Promise<{
        id: number;
        created: Date;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        notes: string | null;
        isArchived: boolean;
    }[]>;
    findAppointmentsToday(): Promise<{
        id: number;
        created: Date;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        notes: string | null;
        isArchived: boolean;
    }[]>;
    findAppointmentsByBarber(id: number): Promise<{
        id: number;
        created: Date;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        notes: string | null;
        isArchived: boolean;
    }[]>;
    findAppointmentsByUser(id: number): Promise<{
        id: number;
        created: Date;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        notes: string | null;
        isArchived: boolean;
    }[]>;
    updateStatus(id: number, status: AppointmentStatus): Promise<{
        id: number;
        created: Date;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        notes: string | null;
        isArchived: boolean;
    }>;
}
