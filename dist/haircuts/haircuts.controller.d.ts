import { HaircutsService } from './haircuts.service';
import { CreateHaircutDto } from './dto/create-haircut.dto';
import { UpdateHaircutDto } from './dto/update-haircut.dto';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class HaircutsController {
    private readonly haircutsService;
    private readonly cloudinaryService;
    constructor(haircutsService: HaircutsService, cloudinaryService: CloudinaryService);
    create(files: Express.Multer.File[], createHaircutDto: CreateHaircutDto): Promise<{
        id: number;
        name: string;
        description: string | null;
        isActive: boolean;
        isArchived: boolean;
        imgs: string[];
    }>;
    findAll(params: SearchStatusQueryDto): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string | null;
        isActive: boolean;
        isArchived: boolean;
        imgs: string[];
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        description: string | null;
        isActive: boolean;
        isArchived: boolean;
        imgs: string[];
    }>;
    update(id: number, updateHaircutDto: UpdateHaircutDto): Promise<{
        id: number;
        name: string;
        description: string | null;
        isActive: boolean;
        isArchived: boolean;
        imgs: string[];
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        description: string | null;
        isActive: boolean;
        isArchived: boolean;
        imgs: string[];
    }>;
}
