import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
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
        discount: import("@prisma/client/runtime/library").Decimal;
        price: import("@prisma/client/runtime/library").Decimal;
        stock: number;
        lastStockEntry: Date | null;
    }>;
    findAll(params: SearchStatusQueryDto): Promise<{
        description: string;
        name: string;
        isActive: boolean;
        img: string;
        id: number;
        created: Date;
        updated: Date;
        orderLimit: number;
        discount: import("@prisma/client/runtime/library").Decimal;
        price: import("@prisma/client/runtime/library").Decimal;
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
        discount: import("@prisma/client/runtime/library").Decimal;
        price: import("@prisma/client/runtime/library").Decimal;
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
        discount: import("@prisma/client/runtime/library").Decimal;
        price: import("@prisma/client/runtime/library").Decimal;
        stock: number;
        lastStockEntry: Date | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
