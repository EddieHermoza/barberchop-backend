import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
export declare class ServicesService {
    private readonly db;
    constructor(db: PrismaService);
    create(createServiceDto: CreateServiceDto): Promise<{
        id: number;
        name: string;
        description: string;
        price: Prisma.Decimal;
        img: string | null;
        isActive: boolean;
        isArchived: boolean;
    }>;
    findAll({ limit, page, query, status }: SearchStatusQueryDto): Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        price: Prisma.Decimal;
        img: string | null;
        isActive: boolean;
        isArchived: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: Prisma.Decimal;
        img: string | null;
        isActive: boolean;
        isArchived: boolean;
    }>;
    update(id: number, updateServiceDto: UpdateServiceDto): Promise<{
        id: number;
        name: string;
        description: string;
        price: Prisma.Decimal;
        img: string | null;
        isActive: boolean;
        isArchived: boolean;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
