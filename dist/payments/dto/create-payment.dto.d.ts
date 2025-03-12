import { PaymentMethod, Status } from '@prisma/client';
export declare class CreatePaymentDto {
    appointmentId: number;
    amount: number;
    additionalAmount: number;
    discount: number;
    totalAmount: number;
    method: PaymentMethod;
    status: Status;
    notes: string;
}
