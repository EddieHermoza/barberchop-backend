import { AppointmentStatus } from '@prisma/client';
export declare class CreateAppointmentDto {
    scheduledAt: Date;
    customerId: number;
    barberId: number;
    serviceId: number;
    status: AppointmentStatus;
    notes: string;
}
