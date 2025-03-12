import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
export declare class ProductsService {
    private readonly db;
    constructor(db: PrismaService);
    create(createProductDto: CreateProductDto): Promise<{
        description: string;
        name: string;
        isActive: boolean;
        img: string;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
        category: import(".prisma/client").$Enums.ProductCategory;
        orderLimit: number;
        discount: Prisma.Decimal;
        price: Prisma.Decimal;
        stock: number;
        lastStockEntry: Date | null;
    }>;
    findAll({ limit, page, status, query }: SearchStatusQueryDto): Promise<{
        description: string;
        name: string;
        isActive: boolean;
        img: string;
        id: number;
        created: Date;
        updated: Date;
        orderLimit: number;
        discount: Prisma.Decimal;
        price: Prisma.Decimal;
    }[]>;
    findOne(id: number): Promise<{
        description: string;
        name: string;
        isActive: boolean;
        img: string;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
        category: import(".prisma/client").$Enums.ProductCategory;
        orderLimit: number;
        discount: Prisma.Decimal;
        price: Prisma.Decimal;
        stock: number;
        lastStockEntry: Date | null;
    }>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<{
        description: string;
        name: string;
        isActive: boolean;
        img: string;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
        category: import(".prisma/client").$Enums.ProductCategory;
        orderLimit: number;
        discount: Prisma.Decimal;
        price: Prisma.Decimal;
        stock: number;
        lastStockEntry: Date | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
