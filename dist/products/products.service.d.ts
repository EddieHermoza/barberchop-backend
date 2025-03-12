import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
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
        img: string;
        discount: Prisma.Decimal;
        description: string;
        price: Prisma.Decimal;
        category: string;
        stock: number;
        orderLimit: number;
        lastStockEntry: Date | null;
    }>;
    findAll({ limit, page, status, query }: SearchStatusQueryDto): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        img: string;
        discount: Prisma.Decimal;
        description: string;
        price: Prisma.Decimal;
        orderLimit: number;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
        img: string;
        discount: Prisma.Decimal;
        description: string;
        price: Prisma.Decimal;
        category: string;
        stock: number;
        orderLimit: number;
        lastStockEntry: Date | null;
    }>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
        img: string;
        discount: Prisma.Decimal;
        description: string;
        price: Prisma.Decimal;
        category: string;
        stock: number;
        orderLimit: number;
        lastStockEntry: Date | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
