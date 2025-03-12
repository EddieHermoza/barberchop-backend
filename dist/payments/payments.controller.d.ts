import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { AppointmentPaymentQueryDto } from './dto/appointmentPayment-query.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(createPaymentDto: CreatePaymentDto): Promise<{
        id: number;
        created: Date;
        appointmentId: number;
        serviceAmount: import("@prisma/client/runtime/library").Decimal;
        additionalAmount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        method: import(".prisma/client").$Enums.PaymentMethod;
        status: import(".prisma/client").$Enums.Status;
        notes: string | null;
    }>;
    findAll(params: AppointmentPaymentQueryDto): Promise<{
        id: number;
        created: Date;
        appointmentId: number;
        serviceAmount: import("@prisma/client/runtime/library").Decimal;
        additionalAmount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        method: import(".prisma/client").$Enums.PaymentMethod;
        status: import(".prisma/client").$Enums.Status;
        notes: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        created: Date;
        appointmentId: number;
        serviceAmount: import("@prisma/client/runtime/library").Decimal;
        additionalAmount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        method: import(".prisma/client").$Enums.PaymentMethod;
        status: import(".prisma/client").$Enums.Status;
        notes: string | null;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
