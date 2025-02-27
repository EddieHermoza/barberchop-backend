import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryProps } from '../pipes/validate-query.pipe';
import { Prisma } from '@prisma/client';
export declare class ProductsService {
    private readonly db;
    constructor(db: PrismaService);
    create(createProductDto: CreateProductDto): Promise<{
        id: number;
        created: Date;
        updated: Date;
        name: string;
        description: string;
        category: string;
        img: string;
        stock: number;
        price: Prisma.Decimal;
        discount: Prisma.Decimal;
        orderLimit: number;
        isActive: boolean;
        isArchived: boolean;
        lastStockEntry: Date | null;
    }>;
    findAll({ limit, page, status, query }: QueryProps): Promise<{
        id: number;
        created: Date;
        updated: Date;
        name: string;
        description: string;
        img: string;
        price: Prisma.Decimal;
        discount: Prisma.Decimal;
        orderLimit: number;
        isActive: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        created: Date;
        updated: Date;
        name: string;
        description: string;
        category: string;
        img: string;
        stock: number;
        price: Prisma.Decimal;
        discount: Prisma.Decimal;
        orderLimit: number;
        isActive: boolean;
        isArchived: boolean;
        lastStockEntry: Date | null;
    }>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<any>;
    remove(id: number): Promise<any>;
}
