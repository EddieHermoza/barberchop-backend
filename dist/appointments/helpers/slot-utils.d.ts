export declare function formatTime(date: Date): string;
export declare function generateSlots(startTime: Date, endTime: Date): {
    range: string;
    available: boolean;
}[];
