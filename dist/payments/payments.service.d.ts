import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppointmentsService } from 'src/appointments/appointments.service';
export declare class PaymentsService {
    private readonly db;
    private readonly appointmentsService;
    constructor(db: PrismaService, appointmentsService: AppointmentsService);
    create(createPaymentDto: CreatePaymentDto): Promise<string>;
    findAll(): Promise<string>;
    findOne(id: number): Promise<string>;
    update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<string>;
    remove(id: number): Promise<string>;
}
