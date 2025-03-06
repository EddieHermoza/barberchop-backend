import { AppointmentStatus } from '@prisma/client';
export declare class CreateAppointmentDto {
    scheduledAt: Date;
    userId: number;
    barberId: number;
    serviceId: number;
    status: AppointmentStatus;
    notes: string;
}
