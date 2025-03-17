import { ScheduleService } from './schedule.service';
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    findAll(): string;
    getAvailability(barberId: number, date: Date): Promise<{
        slots: import("./interfaces/slot.interface").Slot[];
    }>;
    findOne(id: string): string;
    remove(id: string): string;
}
