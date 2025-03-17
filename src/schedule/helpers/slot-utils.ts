import {
  BREAK_DURATION,
  SESSION_DURATION,
} from '../constants/schedule.constants';
import { Slot } from '../interfaces/slot.interface';

export function formatTime(date: Date): string {
  return date.toLocaleTimeString('es-PE', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

export function generateSlots(
  startTime: Date,
  endTime: Date,
): { range: string; available: boolean }[] {
  const slots: Slot[] = [];
  let current = new Date(startTime);

  while (current.getTime() + SESSION_DURATION * 60000 <= endTime.getTime()) {
    const sessionEnd = new Date(current.getTime() + SESSION_DURATION * 60000);
    const slotRange = `${formatTime(current)} - ${formatTime(sessionEnd)}`;
    slots.push({ range: slotRange, available: true });
    current = new Date(
      current.getTime() + (SESSION_DURATION + BREAK_DURATION) * 60000,
    );
  }
  return slots;
}
