import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    create(createServiceDto: CreateServiceDto): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
    }>;
    findAll(params: SearchStatusQueryDto): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
    }>;
    update(id: number, updateServiceDto: UpdateServiceDto): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
