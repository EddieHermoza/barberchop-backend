import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
export declare class ProvidersController {
    private readonly providersService;
    constructor(providersService: ProvidersService);
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
    findAll(params: SearchStatusQueryDto): Promise<{
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
