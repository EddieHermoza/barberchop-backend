import { CreatePaymentDto } from './dto/create-payment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppointmentsService } from 'src/appointments/appointments.service';
import { AppointmentPaymentQueryDto } from './dto/appointmentPayment-query.dto';
export declare class PaymentsService {
    private readonly db;
    private readonly appointmentsService;
    constructor(db: PrismaService, appointmentsService: AppointmentsService);
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
    findAll({ limit, payment, page, status }: AppointmentPaymentQueryDto): Promise<{
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
    findOne(id: number): Promise<{
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
    remove(id: number): Promise<{
        message: string;
    }>;
}
