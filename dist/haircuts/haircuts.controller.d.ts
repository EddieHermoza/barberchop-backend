import { HaircutsService } from './haircuts.service';
import { CreateHaircutDto } from './dto/create-haircut.dto';
import { UpdateHaircutDto } from './dto/update-haircut.dto';
import { QueryProps } from 'src/pipes/validate-query.pipe';
export declare class HaircutsController {
    private readonly haircutsService;
    constructor(haircutsService: HaircutsService);
    create(createHaircutDto: CreateHaircutDto): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        description: string | null;
        imgs: string[];
    }>;
    findAll(params: QueryProps): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        description: string | null;
        imgs: string[];
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        description: string | null;
        imgs: string[];
    }>;
    update(id: number, updateHaircutDto: UpdateHaircutDto): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        description: string | null;
        imgs: string[];
    }>;
    remove(id: number): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        description: string | null;
        imgs: string[];
    }>;
}
