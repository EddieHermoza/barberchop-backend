import { ApiProperty } from '@nestjs/swagger';
import { ProductCategory } from '@prisma/client';
import { IsEnum, IsOptional } from 'class-validator';
import { SearchQueryDto } from 'src/common/dto/search-query.dto';

export class ProductCategoryQueryDto extends SearchQueryDto {
  @ApiProperty({
    description: 'Categoría del producto',
    enum: ProductCategory,
  })
  @IsOptional()
  @IsEnum(ProductCategory, {
    message: 'El parámetro de categoría del producto debe ser válido',
  })
  @IsOptional()
  category?: ProductCategory | null = null;
}
