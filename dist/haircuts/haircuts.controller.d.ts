import { HaircutsService } from './haircuts.service';
import { CreateHaircutDto } from './dto/create-haircut.dto';
import { UpdateHaircutDto } from './dto/update-haircut.dto';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { SearchQueryDto } from 'src/common/dto/search-query.dto';
export declare class HaircutsController {
    private readonly haircutsService;
    private readonly cloudinaryService;
    constructor(haircutsService: HaircutsService, cloudinaryService: CloudinaryService);
    create(files: Express.Multer.File[], createHaircutDto: CreateHaircutDto): Promise<{
        description: string | null;
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        imgs: string[];
    }>;
    findAll(params: SearchStatusQueryDto): Promise<{
        description: string | null;
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        imgs: string[];
    }[]>;
    findAvailaibleHaircuts(params: SearchQueryDto): Promise<{
        description: string | null;
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        imgs: string[];
    }[]>;
    findOne(id: number): Promise<{
        description: string | null;
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        imgs: string[];
    }>;
    update(files: Express.Multer.File[], id: number, updateHaircutDto: UpdateHaircutDto): Promise<{
        description: string | null;
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        imgs: string[];
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
