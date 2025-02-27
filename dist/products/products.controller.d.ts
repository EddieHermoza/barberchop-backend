import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { QueryProps } from '../pipes/validate-query.pipe';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<{
        name: string;
        description: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
        category: string;
        img: string;
        orderLimit: number;
        discount: import("@prisma/client/runtime/library").Decimal;
        price: import("@prisma/client/runtime/library").Decimal;
        stock: number;
        lastStockEntry: Date | null;
    }>;
    findAll(params: QueryProps): Promise<{
        name: string;
        description: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        img: string;
        orderLimit: number;
        discount: import("@prisma/client/runtime/library").Decimal;
        price: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        description: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
        category: string;
        img: string;
        orderLimit: number;
        discount: import("@prisma/client/runtime/library").Decimal;
        price: import("@prisma/client/runtime/library").Decimal;
        stock: number;
        lastStockEntry: Date | null;
    }>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<any>;
    remove(id: number): Promise<any>;
}
