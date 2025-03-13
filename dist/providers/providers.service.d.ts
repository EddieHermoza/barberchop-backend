import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { PrismaService } from '../prisma/prisma.service';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
export declare class ProvidersService {
    private readonly db;
    constructor(db: PrismaService);
    create(createProviderDto: CreateProviderDto): Promise<{
        number: string;
        id: number;
        created: Date;
        updated: Date;
        ruc: string;
        name: string;
        legal: string;
        web: string | null;
        email: string;
        isActive: boolean;
        isArchived: boolean;
    }>;
    findAll({ limit, page, query, status }: SearchStatusQueryDto): Promise<{
        number: string;
        id: number;
        created: Date;
        updated: Date;
        ruc: string;
        name: string;
        legal: string;
        web: string | null;
        email: string;
        isActive: boolean;
        isArchived: boolean;
    }[]>;
    findOne(id: number): Promise<{
        number: string;
        id: number;
        created: Date;
        updated: Date;
        ruc: string;
        name: string;
        legal: string;
        web: string | null;
        email: string;
        isActive: boolean;
        isArchived: boolean;
    }>;
    update(id: number, updateProviderDto: UpdateProviderDto): Promise<{
        number: string;
        id: number;
        created: Date;
        updated: Date;
        ruc: string;
        name: string;
        legal: string;
        web: string | null;
        email: string;
        isActive: boolean;
        isArchived: boolean;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
