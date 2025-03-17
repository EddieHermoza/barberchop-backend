"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTime = formatTime;
exports.generateSlots = generateSlots;
const schedule_constants_1 = require("../constants/schedule.constants");
function formatTime(date) {
    return date.toLocaleTimeString('es-PE', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
}
function generateSlots(startTime, endTime) {
    const slots = [];
    let current = new Date(startTime);
    while (current.getTime() + schedule_constants_1.SESSION_DURATION * 60000 <= endTime.getTime()) {
        const sessionEnd = new Date(current.getTime() + schedule_constants_1.SESSION_DURATION * 60000);
        const slotRange = `${formatTime(current)} - ${formatTime(sessionEnd)}`;
        slots.push({ range: slotRange, available: true });
        current = new Date(current.getTime() + (schedule_constants_1.SESSION_DURATION + schedule_constants_1.BREAK_DURATION) * 60000);
    }
    return slots;
}
//# sourceMappingURL=slot-utils.js.map