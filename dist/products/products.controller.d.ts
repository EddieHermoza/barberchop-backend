import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { QueryProps } from '../pipes/validate-query.pipe';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<{
        id: number;
        created: Date;
        updated: Date;
        name: string;
        description: string;
        category: string;
        img: string;
        stock: number;
        price: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        orderLimit: number;
        isActive: boolean;
        isArchived: boolean;
        lastStockEntry: Date | null;
    }>;
    findAll(params: QueryProps): Promise<{
        id: number;
        created: Date;
        updated: Date;
        name: string;
        description: string;
        img: string;
        price: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
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
        price: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        orderLimit: number;
        isActive: boolean;
        isArchived: boolean;
        lastStockEntry: Date | null;
    }>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<any>;
    remove(id: number): Promise<any>;
}
