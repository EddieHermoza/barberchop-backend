import { ApiProperty } from '@nestjs/swagger';
import { PaginatedQueryDto } from './paginated-query.dto';
import { IsOptional, IsString } from 'class-validator';

export class SearchQueryDto extends PaginatedQueryDto {
  @ApiProperty({ description: 'Texto de búsqueda', example: '' })
  @IsOptional()
  @IsString()
  query?: string = '';
}
