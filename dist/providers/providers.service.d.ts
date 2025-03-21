import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { PrismaService } from '../prisma/prisma.service';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
export declare class ProvidersService {
    private readonly db;
    constructor(db: PrismaService);
    create(createProviderDto: CreateProviderDto): Promise<{
        number: string;
        name: string;
        email: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
        ruc: string;
        legal: string;
        web: string | null;
    }>;
    findAll({ limit, page, query, status }: SearchStatusQueryDto): Promise<{
        number: string;
        name: string;
        email: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
        ruc: string;
        legal: string;
        web: string | null;
    }[]>;
    findOne(id: number): Promise<{
        number: string;
        name: string;
        email: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
        ruc: string;
        legal: string;
        web: string | null;
    }>;
    update(id: number, updateProviderDto: UpdateProviderDto): Promise<{
        number: string;
        name: string;
        email: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
        ruc: string;
        legal: string;
        web: string | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
