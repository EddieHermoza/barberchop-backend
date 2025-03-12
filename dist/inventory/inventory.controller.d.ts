import { InventoryService } from './inventory.service';
import { CreateMovementDto } from './dto/create-movement.dto';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { MovementQueryDto } from './dto/movement-query.dto';
export declare class InventoryController {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
    findAll(params: SearchStatusQueryDto): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        stock: number;
        lastStockEntry: Date;
    }[]>;
    create(createMovementDto: CreateMovementDto): Promise<{
        id: number;
        created: Date;
        notes: string;
        type: import(".prisma/client").$Enums.MovementType;
        productId: number;
        quantity: number;
    }>;
    findAllMovements(params: MovementQueryDto): Promise<({
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
    findOne(id: number): Promise<{
        id: number;
        created: Date;
        notes: string;
        type: import(".prisma/client").$Enums.MovementType;
        productId: number;
        quantity: number;
    }>;
}
