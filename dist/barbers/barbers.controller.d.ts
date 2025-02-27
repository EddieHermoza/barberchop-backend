import { BarbersService } from './barbers.service';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { QueryProps } from 'src/pipes/validate-query.pipe';
export declare class BarbersController {
    private readonly barbersService;
    constructor(barbersService: BarbersService);
    create(createBarberDto: CreateBarberDto): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
    }>;
    findAll(params: QueryProps): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
    }>;
    update(id: number, updateBarberDto: UpdateBarberDto): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
    }>;
    remove(id: number): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        isArchived: boolean;
        img: string | null;
    }>;
}
