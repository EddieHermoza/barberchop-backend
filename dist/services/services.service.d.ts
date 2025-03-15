import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class ServicesService {
    private readonly db;
    private readonly cloudinaryService;
    constructor(db: PrismaService, cloudinaryService: CloudinaryService);
    create(createServiceDto: CreateServiceDto, file?: Express.Multer.File): Promise<{
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
    update(id: number, updateServiceDto: UpdateServiceDto, file?: Express.Multer.File): Promise<{
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
