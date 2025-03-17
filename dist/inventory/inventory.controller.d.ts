import { InventoryService } from './inventory.service';
import { CreateMovementDto } from './dto/create-movement.dto';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { MovementQueryDto } from './dto/movement-query.dto';
import { ProductCategoryQueryDto } from './dto/product-category-query.dto';
export declare class InventoryController {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
    findAvailaibleProducts(params: ProductCategoryQueryDto): Promise<{
        description: string;
        name: string;
        img: string;
        id: number;
        category: import(".prisma/client").$Enums.ProductCategory;
        orderLimit: number;
        discount: import("@prisma/client/runtime/library").Decimal;
        price: import("@prisma/client/runtime/library").Decimal;
        stock: number;
    }[]>;
    findAll(params: SearchStatusQueryDto): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        stock: number;
        lastStockEntry: Date;
    }[]>;
    create(createMovementDto: CreateMovementDto): Promise<{
        type: import(".prisma/client").$Enums.MovementType;
        id: number;
        created: Date;
        productId: number;
        quantity: number;
        notes: string;
    }>;
    findAllMovements(params: MovementQueryDto): Promise<({
        Product: {
            name: string;
        };
    } & {
        type: import(".prisma/client").$Enums.MovementType;
        id: number;
        created: Date;
        productId: number;
        quantity: number;
        notes: string;
    })[]>;
    findOne(id: number): Promise<{
        type: import(".prisma/client").$Enums.MovementType;
        id: number;
        created: Date;
        productId: number;
        quantity: number;
        notes: string;
    }>;
}
