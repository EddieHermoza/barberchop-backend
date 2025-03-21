import { CreateHaircutDto } from './dto/create-haircut.dto';
import { UpdateHaircutDto } from './dto/update-haircut.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { SearchQueryDto } from 'src/common/dto/search-query.dto';
export declare class HaircutsService {
    private readonly db;
    private readonly cloudinaryService;
    constructor(db: PrismaService, cloudinaryService: CloudinaryService);
    create(createHaircutDto: CreateHaircutDto, files?: Express.Multer.File[]): Promise<{
        description: string | null;
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        imgs: string[];
    }>;
    findAll({ limit, page, query, status }: SearchStatusQueryDto): Promise<{
        description: string | null;
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        imgs: string[];
    }[]>;
    findAvailaibleHaircuts({ limit, page, query }: SearchQueryDto): Promise<{
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
    update(id: number, updateHaircutDto: UpdateHaircutDto, files?: Express.Multer.File[]): Promise<{
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
