import { HaircutsService } from './haircuts.service';
import { CreateHaircutDto } from './dto/create-haircut.dto';
import { UpdateHaircutDto } from './dto/update-haircut.dto';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
export declare class HaircutsController {
    private readonly haircutsService;
    constructor(haircutsService: HaircutsService);
    create(createHaircutDto: CreateHaircutDto): Promise<{
        name: string;
        description: string | null;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        imgs: string[];
    }>;
    findAll(params: SearchStatusQueryDto): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        description: string | null;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        imgs: string[];
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        description: string | null;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        imgs: string[];
    }>;
    update(id: number, updateHaircutDto: UpdateHaircutDto): Promise<{
        name: string;
        description: string | null;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        imgs: string[];
    }>;
    remove(id: number): Promise<{
        name: string;
        description: string | null;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        imgs: string[];
    }>;
}
