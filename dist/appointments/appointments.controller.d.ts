import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { IUserSession } from 'src/common/interfaces/user-session.interface';
import { AppointmentQueryDto } from './dto/appointment-query.dto';
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    create(user: IUserSession, createAppointmentDto: CreateAppointmentDto): Promise<{
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
    findAll(params: AppointmentQueryDto): Promise<{
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
    findAllAppointementByDate(date: Date): Promise<{
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
    findAllAppointmentsToday(): Promise<{
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
    findAllAppointmentsByBarber(barberId: number): Promise<{
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
    findAllAppointmentsByUser(userId: number): Promise<{
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
    confirmAppointment(id: number): Promise<{
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
    startAppointment(id: number): Promise<{
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
    cancelAppointment(id: number): Promise<{
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
    completeAppointment(id: number): Promise<{
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
