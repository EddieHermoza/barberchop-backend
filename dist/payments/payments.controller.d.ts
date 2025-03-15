import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { AppointmentPaymentQueryDto } from './dto/appointmentPayment-query.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(createPaymentDto: CreatePaymentDto): Promise<{
        id: number;
        status: import(".prisma/client").$Enums.Status;
        created: Date;
        notes: string | null;
        appointmentId: number;
        serviceAmount: import("@prisma/client/runtime/library").Decimal;
        additionalAmount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        method: import(".prisma/client").$Enums.PaymentMethod;
    }>;
    findAll(params: AppointmentPaymentQueryDto): Promise<{
        id: number;
        status: import(".prisma/client").$Enums.Status;
        created: Date;
        notes: string | null;
        appointmentId: number;
        serviceAmount: import("@prisma/client/runtime/library").Decimal;
        additionalAmount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        method: import(".prisma/client").$Enums.PaymentMethod;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        status: import(".prisma/client").$Enums.Status;
        created: Date;
        notes: string | null;
        appointmentId: number;
        serviceAmount: import("@prisma/client/runtime/library").Decimal;
        additionalAmount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        method: import(".prisma/client").$Enums.PaymentMethod;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
