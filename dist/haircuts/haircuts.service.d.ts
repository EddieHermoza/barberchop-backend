import { CreateHaircutDto } from './dto/create-haircut.dto';
import { UpdateHaircutDto } from './dto/update-haircut.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryProps } from 'src/pipes/validate-query.pipe';
import { Prisma } from '@prisma/client';
export declare class HaircutsService {
    private readonly db;
    constructor(db: PrismaService);
    create(createHaircutDto: CreateHaircutDto): Promise<{
        name: string;
        description: string | null;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        imgs: string[];
    }>;
    findAll({ limit, page, query, status }: QueryProps): Prisma.PrismaPromise<{
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
