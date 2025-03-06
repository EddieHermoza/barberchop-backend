import { PaginatedQueryDto } from 'src/common/dto/paginated-query.dto';
import { MovementType } from '@prisma/client';
export declare class MovementQueryDto extends PaginatedQueryDto {
    status?: MovementType | null;
}
