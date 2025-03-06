import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(createPaymentDto: CreatePaymentDto): Promise<string>;
    findAll(): Promise<string>;
    findOne(id: string): Promise<string>;
    update(id: string, updatePaymentDto: UpdatePaymentDto): Promise<string>;
    remove(id: string): Promise<string>;
}
