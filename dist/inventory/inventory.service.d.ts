import { CreateMovementDto } from './dto/create-movement.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsService } from '../products/products.service';
import { QueryProps } from '../pipes/validate-query.pipe';
import { Prisma } from '@prisma/client';
export declare class InventoryService {
    private readonly db;
    private readonly productService;
    constructor(db: PrismaService, productService: ProductsService);
    createMovement(createMovementDto: CreateMovementDto): Promise<{
        id: number;
        created: Date;
        type: import(".prisma/client").$Enums.MovementType;
        productId: number;
        quantity: number;
        notes: string;
    }>;
    findAllProductsInventory({ page, limit, query, status }: QueryProps): Promise<{
        id: number;
        name: string;
        stock: number;
        isActive: boolean;
        lastStockEntry: Date;
    }[]>;
    findAllMovements({ page, limit }: QueryProps): Promise<({
        Product: {
            name: string;
        };
    } & {
        id: number;
        created: Date;
        type: import(".prisma/client").$Enums.MovementType;
        productId: number;
        quantity: number;
        notes: string;
    })[]>;
    findOneMovement(id: number): Promise<{
        id: number;
        created: Date;
        type: import(".prisma/client").$Enums.MovementType;
        productId: number;
        quantity: number;
        notes: string;
    }>;
    updateProductStock(productId: number, quantity: number, type: string): Promise<{
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
}
