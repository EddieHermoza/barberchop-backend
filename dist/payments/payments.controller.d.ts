import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { AppointmentPaymentQueryDto } from './dto/appointmentPayment-query.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(createPaymentDto: CreatePaymentDto): Promise<{
        status: import(".prisma/client").$Enums.Status;
        id: number;
        created: Date;
        discount: import("@prisma/client/runtime/library").Decimal;
        notes: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        appointmentId: number;
        additionalAmount: import("@prisma/client/runtime/library").Decimal;
        method: import(".prisma/client").$Enums.PaymentMethod;
        serviceAmount: import("@prisma/client/runtime/library").Decimal;
    }>;
    findAll(params: AppointmentPaymentQueryDto): Promise<{
        status: import(".prisma/client").$Enums.Status;
        id: number;
        created: Date;
        discount: import("@prisma/client/runtime/library").Decimal;
        notes: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        appointmentId: number;
        additionalAmount: import("@prisma/client/runtime/library").Decimal;
        method: import(".prisma/client").$Enums.PaymentMethod;
        serviceAmount: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    findOne(id: string): Promise<{
        status: import(".prisma/client").$Enums.Status;
        id: number;
        created: Date;
        discount: import("@prisma/client/runtime/library").Decimal;
        notes: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        appointmentId: number;
        additionalAmount: import("@prisma/client/runtime/library").Decimal;
        method: import(".prisma/client").$Enums.PaymentMethod;
        serviceAmount: import("@prisma/client/runtime/library").Decimal;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
