import { AppointmentStatus } from '@prisma/client';
import { PaginatedQueryDto } from 'src/common/dto/paginated-query.dto';
export declare class AppointmentQueryDto extends PaginatedQueryDto {
    from_date?: Date | null;
    to_date?: Date | null;
    status?: AppointmentStatus | null;
}
