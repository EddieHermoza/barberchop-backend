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
        type: import(".prisma/client").$Enums.MovementType;
        id: number;
        created: Date;
        productId: number;
        quantity: number;
        notes: string;
    }>;
    findAllMovements(params: QueryProps): Promise<({
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
