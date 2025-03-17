import { AppointmentsService } from 'src/appointments/appointments.service';
import { Slot } from './interfaces/slot.interface';
export declare class ScheduleService {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    findAll(): string;
    findOne(id: number): string;
    remove(id: number): string;
    getAvailability(barberId: number, date: Date): Promise<{
        slots: Slot[];
    }>;
}
