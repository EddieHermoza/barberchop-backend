import { PaymentMethod, Status } from '@prisma/client';
import { PaginatedQueryDto } from 'src/common/dto/paginated-query.dto';
export declare class AppointmentPaymentQueryDto extends PaginatedQueryDto {
    payment?: PaymentMethod | null;
    status?: Status | null;
}
