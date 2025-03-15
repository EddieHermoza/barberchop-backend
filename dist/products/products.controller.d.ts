import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto, file?: Express.Multer.File): Promise<{
        id: number;
        created: Date;
        updated: Date;
        name: string;
        isActive: boolean;
        isArchived: boolean;
        img: string;
        discount: import("@prisma/client/runtime/library").Decimal;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        category: import(".prisma/client").$Enums.ProductCategory;
        stock: number;
        orderLimit: number;
        lastStockEntry: Date | null;
    }>;
    findAll(params: SearchStatusQueryDto): Promise<{
        id: number;
        created: Date;
        updated: Date;
        name: string;
        isActive: boolean;
        img: string;
        discount: import("@prisma/client/runtime/library").Decimal;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        orderLimit: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        created: Date;
        updated: Date;
        name: string;
        isActive: boolean;
        isArchived: boolean;
        img: string;
        discount: import("@prisma/client/runtime/library").Decimal;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        category: import(".prisma/client").$Enums.ProductCategory;
        stock: number;
        orderLimit: number;
        lastStockEntry: Date | null;
    }>;
    update(id: number, updateProductDto: UpdateProductDto, file: Express.Multer.File): Promise<{
        id: number;
        created: Date;
        updated: Date;
        name: string;
        isActive: boolean;
        isArchived: boolean;
        img: string;
        discount: import("@prisma/client/runtime/library").Decimal;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        category: import(".prisma/client").$Enums.ProductCategory;
        stock: number;
        orderLimit: number;
        lastStockEntry: Date | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
