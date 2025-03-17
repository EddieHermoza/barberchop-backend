import { Injectable } from '@nestjs/common';
import { AppointmentsService } from 'src/appointments/appointments.service';
import { Slot } from './interfaces/slot.interface';
import {
  SCHEDULE_BLOCKS,
  SESSION_DURATION,
} from './constants/schedule.constants';
import { formatTime, generateSlots } from './helpers/slot-utils';

@Injectable()
export class ScheduleService {
  constructor(private readonly appointmentsService: AppointmentsService) {}
  findAll() {
    return `This action returns all schedule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }

  async getAvailability(
    barberId: number,
    date: Date,
  ): Promise<{ slots: Slot[] }> {
    const queryDate = new Date(date);
    const allSlots: Slot[] = [];

    SCHEDULE_BLOCKS.forEach((block) => {
      const blockStart = new Date(queryDate);
      blockStart.setHours(block.startHour, 0, 0, 0);

      const blockEnd = new Date(queryDate);
      blockEnd.setHours(block.endHour, 0, 0, 0);

      const slots = generateSlots(blockStart, blockEnd);
      allSlots.push(...slots);
    });

    const appointments =
      await this.appointmentsService.findAppointmentsByBarber(barberId, date);
    const reservedSet = new Set<string>();
    appointments.forEach((app) => {
      const startTime = new Date(app.scheduledAt);
      const sessionEnd = new Date(
        startTime.getTime() + SESSION_DURATION * 60000,
      );
      const reservedRange = `${formatTime(startTime)} - ${formatTime(sessionEnd)}`;
      reservedSet.add(reservedRange);
    });

    allSlots.forEach((slot) => {
      if (reservedSet.has(slot.range)) {
        slot.available = false;
      }
    });

    return { slots: allSlots };
  }
}
