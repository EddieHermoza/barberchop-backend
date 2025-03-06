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
        type: import(".prisma/client").$Enums.MovementType;
        id: number;
        created: Date;
        productId: number;
        quantity: number;
        notes: string;
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
        type: import(".prisma/client").$Enums.MovementType;
        id: number;
        created: Date;
        productId: number;
        quantity: number;
        notes: string;
    })[]>;
    findOneMovement(id: number): Promise<{
        type: import(".prisma/client").$Enums.MovementType;
        id: number;
        created: Date;
        productId: number;
        quantity: number;
        notes: string;
    }>;
    updateProductStock(productId: number, quantity: number, type: string): Promise<{
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
        discount: Prisma.Decimal;
        price: Prisma.Decimal;
        stock: number;
        lastStockEntry: Date | null;
    }>;
}
