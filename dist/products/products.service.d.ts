import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryProps } from '../pipes/validate-query.pipe';
import { Prisma } from '@prisma/client';
export declare class ProductsService {
  private readonly db;
  constructor(db: PrismaService);
  create(createProductDto: CreateProductDto): Promise<{
    name: string;
    isActive: boolean;
    id: number;
    created: Date;
    updated: Date;
    isArchived: boolean;
    description: string;
    category: string;
    img: string;
    orderLimit: number;
    discount: Prisma.Decimal;
    price: Prisma.Decimal;
    stock: number;
    lastStockEntry: Date | null;
  }>;
  findAll({ limit, page, status, query }: QueryProps): Promise<
    {
      name: string;
      isActive: boolean;
      id: number;
      created: Date;
      updated: Date;
      description: string;
      img: string;
      orderLimit: number;
      discount: Prisma.Decimal;
      price: Prisma.Decimal;
    }[]
  >;
  findOne(id: number): Promise<{
    name: string;
    isActive: boolean;
    id: number;
    created: Date;
    updated: Date;
    isArchived: boolean;
    description: string;
    category: string;
    img: string;
    orderLimit: number;
    discount: Prisma.Decimal;
    price: Prisma.Decimal;
    stock: number;
    lastStockEntry: Date | null;
  }>;
  update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<{
    name: string;
    isActive: boolean;
    id: number;
    created: Date;
    updated: Date;
    isArchived: boolean;
    description: string;
    category: string;
    img: string;
    orderLimit: number;
    discount: Prisma.Decimal;
    price: Prisma.Decimal;
    stock: number;
    lastStockEntry: Date | null;
  }>;
  remove(id: number): Promise<{
    name: string;
    isActive: boolean;
    id: number;
    created: Date;
    updated: Date;
    isArchived: boolean;
    description: string;
    category: string;
    img: string;
    orderLimit: number;
    discount: Prisma.Decimal;
    price: Prisma.Decimal;
    stock: number;
    lastStockEntry: Date | null;
  }>;
}
