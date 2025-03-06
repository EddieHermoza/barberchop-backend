import { PaginatedQueryDto } from './paginated-query.dto';
export declare class SearchStatusQueryDto extends PaginatedQueryDto {
    query?: string;
    status?: boolean | null;
}
