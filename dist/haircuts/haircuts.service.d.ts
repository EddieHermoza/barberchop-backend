import { CreateHaircutDto } from './dto/create-haircut.dto';
import { UpdateHaircutDto } from './dto/update-haircut.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class HaircutsService {
    private readonly db;
    private readonly cloudinaryService;
    constructor(db: PrismaService, cloudinaryService: CloudinaryService);
    create(createHaircutDto: CreateHaircutDto, files?: Express.Multer.File[]): Promise<{
        id: number;
        name: string;
        description: string | null;
        isActive: boolean;
        isArchived: boolean;
        imgs: string[];
    }>;
    findAll({ limit, page, query, status }: SearchStatusQueryDto): Prisma.PrismaPromise<{
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
    update(id: number, updateHaircutDto: UpdateHaircutDto, files?: Express.Multer.File[]): Promise<{
        id: number;
        name: string;
        description: string | null;
        isActive: boolean;
        isArchived: boolean;
        imgs: string[];
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
