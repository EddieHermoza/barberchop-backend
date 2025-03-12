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
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        description: string | null;
        imgs: string[];
    }>;
    findAll(params: SearchStatusQueryDto): import(".prisma/client").Prisma.PrismaPromise<{
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
        message: string;
    }>;
}
