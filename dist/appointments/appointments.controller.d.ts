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
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }>;
    findAll(params: AppointmentQueryDto): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }[]>;
    findAllAppointementByDate(date: Date): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }[]>;
    findAllAppointmentsToday(): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }[]>;
    findAllAppointmentsByBarber(barberId: number): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }[]>;
    findAllAppointmentsByUser(userId: number): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        customerId: number;
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
        customerId: number;
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
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    confirmAppointment(id: number): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }>;
    startAppointment(id: number): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }>;
    cancelAppointment(id: number): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }>;
    completeAppointment(id: number): Promise<{
        id: number;
        created: Date;
        isArchived: boolean;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        scheduledAt: Date;
        customerId: number;
        barberId: number;
        serviceId: number;
        notes: string | null;
    }>;
}
