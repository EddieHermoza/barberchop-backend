import { CreatePaymentDto } from './dto/create-payment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppointmentsService } from 'src/appointments/appointments.service';
import { AppointmentPaymentQueryDto } from './dto/appointmentPayment-query.dto';
export declare class PaymentsService {
    private readonly db;
    private readonly appointmentsService;
    constructor(db: PrismaService, appointmentsService: AppointmentsService);
    create(createPaymentDto: CreatePaymentDto): Promise<{
        id: number;
        created: Date;
        status: import(".prisma/client").$Enums.Status;
        notes: string | null;
        appointmentId: number;
        serviceAmount: import("@prisma/client/runtime/library").Decimal;
        additionalAmount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        method: import(".prisma/client").$Enums.PaymentMethod;
    }>;
    findAll({ limit, payment, page, status }: AppointmentPaymentQueryDto): Promise<{
        id: number;
        created: Date;
        status: import(".prisma/client").$Enums.Status;
        notes: string | null;
        appointmentId: number;
        serviceAmount: import("@prisma/client/runtime/library").Decimal;
        additionalAmount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        method: import(".prisma/client").$Enums.PaymentMethod;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        created: Date;
        status: import(".prisma/client").$Enums.Status;
        notes: string | null;
        appointmentId: number;
        serviceAmount: import("@prisma/client/runtime/library").Decimal;
        additionalAmount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        method: import(".prisma/client").$Enums.PaymentMethod;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
