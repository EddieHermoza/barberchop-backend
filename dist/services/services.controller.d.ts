import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    create(createServiceDto: CreateServiceDto, file: Express.Multer.File): Promise<{
        id: number;
        name: string;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        img: string | null;
        isActive: boolean;
        isArchived: boolean;
    }>;
    findAll(params: SearchStatusQueryDto): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        img: string | null;
        isActive: boolean;
        isArchived: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        img: string | null;
        isActive: boolean;
        isArchived: boolean;
    }>;
    update(id: number, updateServiceDto: UpdateServiceDto, file: Express.Multer.File): Promise<{
        id: number;
        name: string;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        img: string | null;
        isActive: boolean;
        isArchived: boolean;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
