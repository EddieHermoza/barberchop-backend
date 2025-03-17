import { ProductCategory } from '@prisma/client';
import { SearchQueryDto } from 'src/common/dto/search-query.dto';
export declare class ProductCategoryQueryDto extends SearchQueryDto {
    category?: ProductCategory | null;
}
