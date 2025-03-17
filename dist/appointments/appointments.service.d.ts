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
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        customerId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }>;
    findAll({ limit, page, from_date, status, to_date, }: AppointmentQueryDto): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        customerId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }[]>;
    findOne(id: number): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        customerId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }>;
    update(id: number, updateAppointmentDto: UpdateAppointmentDto): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        customerId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findAppointmentsByDay(date: Date): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        customerId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }[]>;
    findAppointmentsToday(): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        customerId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }[]>;
    findAppointmentsByBarber(id: number, date?: Date): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        customerId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }[]>;
    findAppointmentsByCustomer(id: number, date?: Date): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        customerId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }[]>;
    updateStatus(id: number, status: AppointmentStatus): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        customerId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }>;
}
