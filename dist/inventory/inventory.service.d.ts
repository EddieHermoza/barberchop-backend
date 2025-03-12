import { CreateMovementDto } from './dto/create-movement.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsService } from '../products/products.service';
import { Prisma } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { MovementQueryDto } from './dto/movement-query.dto';
export declare class InventoryService {
    private readonly db;
    private readonly productService;
    constructor(db: PrismaService, productService: ProductsService);
    createMovement(createMovementDto: CreateMovementDto): Promise<{
        id: number;
        created: Date;
        notes: string;
        type: import(".prisma/client").$Enums.MovementType;
        productId: number;
        quantity: number;
    }>;
    findAllProductsInventory({ page, limit, query, status, }: SearchStatusQueryDto): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        stock: number;
        lastStockEntry: Date;
    }[]>;
    findAllMovements({ page, limit, status }: MovementQueryDto): Promise<({
        Product: {
            name: string;
        };
    } & {
        id: number;
        created: Date;
        notes: string;
        type: import(".prisma/client").$Enums.MovementType;
        productId: number;
        quantity: number;
    })[]>;
    findOneMovement(id: number): Promise<{
        id: number;
        created: Date;
        notes: string;
        type: import(".prisma/client").$Enums.MovementType;
        productId: number;
        quantity: number;
    }>;
    updateProductStock(productId: number, quantity: number, type: string): Promise<{
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
}
