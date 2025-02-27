import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { QueryProps } from '../pipes/validate-query.pipe';
export declare class ProvidersController {
    private readonly providersService;
    constructor(providersService: ProvidersService);
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
    findAll(params: QueryProps): Promise<{
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
    remove(id: number): Promise<any>;
}
