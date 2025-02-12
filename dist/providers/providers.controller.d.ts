import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { QueryProps } from '../pipes/validate-query.pipe';
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
  findAll(params: QueryProps): Promise<
    {
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
    }[]
  >;
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
  update(
    id: number,
    updateProviderDto: UpdateProviderDto,
  ): Promise<{
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
}
