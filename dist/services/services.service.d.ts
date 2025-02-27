import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryProps } from 'src/pipes/validate-query.pipe';
import { Prisma } from '@prisma/client';
export declare class ServicesService {
    private readonly db;
    constructor(db: PrismaService);
    create(createServiceDto: CreateServiceDto): Promise<{
        name: string;
        description: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
        price: Prisma.Decimal;
    }>;
    findAll({ limit, page, query, status }: QueryProps): Prisma.PrismaPromise<{
        name: string;
        description: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
        price: Prisma.Decimal;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        description: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
        price: Prisma.Decimal;
    }>;
    update(id: number, updateServiceDto: UpdateServiceDto): Promise<{
        name: string;
        description: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
        price: Prisma.Decimal;
    }>;
    remove(id: number): Promise<{
        name: string;
        description: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
        price: Prisma.Decimal;
    }>;
}
