import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { IUserSession } from 'src/common/interfaces/user-session.interface';
import { AppointmentQueryDto } from './dto/appointment-query.dto';
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    create(user: IUserSession, createAppointmentDto: CreateAppointmentDto): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        userId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }>;
    findAll(params: AppointmentQueryDto): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        userId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }[]>;
    findAllAppointementByDate(date: Date): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        userId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }[]>;
    findAllAppointmentsToday(): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        userId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }[]>;
    findAllAppointmentsByBarber(barberId: number): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        userId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }[]>;
    findAllAppointmentsByUser(userId: number): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        userId: number;
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
        userId: number;
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
        userId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }>;
    remove(id: number): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        userId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }>;
    confirmAppointment(id: number): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        userId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }>;
    startAppointment(id: number): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        userId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }>;
    cancelAppointment(id: number): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        userId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }>;
    completeAppointment(id: number): Promise<{
        status: import(".prisma/client").$Enums.AppointmentStatus;
        id: number;
        created: Date;
        isArchived: boolean;
        notes: string | null;
        userId: number;
        scheduledAt: Date;
        barberId: number;
        serviceId: number;
    }>;
}
