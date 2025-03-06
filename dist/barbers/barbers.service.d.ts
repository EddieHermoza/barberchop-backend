import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
export declare class BarbersService {
    private readonly db;
    constructor(db: PrismaService);
    create(createBarberDto: CreateBarberDto): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
    }>;
    findAll({ limit, page, query, status }: SearchStatusQueryDto): Prisma.PrismaPromise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
    }>;
    update(id: number, updateBarberDto: UpdateBarberDto): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
    }>;
    remove(id: number): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
    }>;
}
