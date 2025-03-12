import { CreateHaircutDto } from './dto/create-haircut.dto';
import { UpdateHaircutDto } from './dto/update-haircut.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
export declare class HaircutsService {
    private readonly db;
    constructor(db: PrismaService);
    create(createHaircutDto: CreateHaircutDto): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        description: string | null;
        imgs: string[];
    }>;
    findAll({ limit, page, query, status }: SearchStatusQueryDto): Prisma.PrismaPromise<{
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
