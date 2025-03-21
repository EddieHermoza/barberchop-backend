import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { SearchQueryDto } from 'src/common/dto/search-query.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    create(createServiceDto: CreateServiceDto, file?: Express.Multer.File): Promise<{
        description: string;
        name: string;
        isActive: boolean;
        img: string | null;
        id: number;
        isArchived: boolean;
        price: import("@prisma/client/runtime/library").Decimal;
    }>;
    findAll(params: SearchStatusQueryDto): Promise<{
        description: string;
        name: string;
        isActive: boolean;
        img: string | null;
        id: number;
        isArchived: boolean;
        price: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    findAvailaibleServices(params: SearchQueryDto): Promise<{
        description: string;
        name: string;
        isActive: boolean;
        img: string | null;
        id: number;
        isArchived: boolean;
        price: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    findOne(id: number): Promise<{
        description: string;
        name: string;
        isActive: boolean;
        img: string | null;
        id: number;
        isArchived: boolean;
        price: import("@prisma/client/runtime/library").Decimal;
    }>;
    update(id: number, updateServiceDto: UpdateServiceDto, file: Express.Multer.File): Promise<{
        description: string;
        name: string;
        isActive: boolean;
        img: string | null;
        id: number;
        isArchived: boolean;
        price: import("@prisma/client/runtime/library").Decimal;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
