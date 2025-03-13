import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class ProductsService {
    private readonly db;
    private readonly cloudinaryService;
    constructor(db: PrismaService, cloudinaryService: CloudinaryService);
    create(createProductDto: CreateProductDto, file?: Express.Multer.File): Promise<{
        id: number;
        created: Date;
        updated: Date;
        name: string;
        description: string;
        category: import(".prisma/client").$Enums.ProductCategory;
        img: string;
        stock: number;
        price: Prisma.Decimal;
        discount: Prisma.Decimal;
        orderLimit: number;
        isActive: boolean;
        isArchived: boolean;
        lastStockEntry: Date | null;
    }>;
    findAll({ limit, page, status, query }: SearchStatusQueryDto): Promise<{
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
        category: import(".prisma/client").$Enums.ProductCategory;
        img: string;
        stock: number;
        price: Prisma.Decimal;
        discount: Prisma.Decimal;
        orderLimit: number;
        isActive: boolean;
        isArchived: boolean;
        lastStockEntry: Date | null;
    }>;
    update(id: number, updateProductDto: UpdateProductDto, file?: Express.Multer.File): Promise<{
        id: number;
        created: Date;
        updated: Date;
        name: string;
        description: string;
        category: import(".prisma/client").$Enums.ProductCategory;
        img: string;
        stock: number;
        price: Prisma.Decimal;
        discount: Prisma.Decimal;
        orderLimit: number;
        isActive: boolean;
        isArchived: boolean;
        lastStockEntry: Date | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
