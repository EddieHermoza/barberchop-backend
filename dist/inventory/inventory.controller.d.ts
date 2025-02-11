import { InventoryService } from './inventory.service';
import { CreateMovementDto } from './dto/create-movement.dto';
import { QueryProps } from '../pipes/validate-query.pipe';
export declare class InventoryController {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
    findAll(params: QueryProps): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        stock: number;
        lastStockEntry: Date;
    }[]>;
    create(createMovementDto: CreateMovementDto): Promise<{
        id: number;
        created: Date;
        type: import(".prisma/client").$Enums.MovementType;
        productId: number;
        quantity: number;
        notes: string;
    }>;
    findAllMovements(params: QueryProps): Promise<({
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
    findOne(id: number): Promise<{
        id: number;
        created: Date;
        type: import(".prisma/client").$Enums.MovementType;
        productId: number;
        quantity: number;
        notes: string;
    }>;
}
