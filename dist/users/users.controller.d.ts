import { UsersService } from './users.service';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { CreateClientDto } from './dto/create-client.dto';
import { CreateBarberDto } from './dto/create-barber.dto';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createCustomer(createClientDto: CreateClientDto): Promise<{
        id: number;
        created: Date;
        updated: Date;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        isArchived: boolean;
    }>;
    createBarber(createBarberDto: CreateBarberDto, file?: Express.Multer.File): Promise<{
        id: number;
        created: Date;
        updated: Date;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        isArchived: boolean;
    }>;
    createAdmin(createAdminDto: CreateAdminDto): Promise<{
        id: number;
        created: Date;
        updated: Date;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        isArchived: boolean;
    }>;
    findAllCustomers(params: SearchStatusQueryDto): Promise<({
        Customer: {
            number: string;
            id: number;
            isArchived: boolean;
            userId: number;
        };
        Admin: {
            id: number;
            isArchived: boolean;
            lastLogin: Date | null;
            userId: number;
        };
        Barber: {
            id: number;
            isActive: boolean;
            isArchived: boolean;
            userId: number;
            skills: string;
            img: string | null;
        };
    } & {
        id: number;
        created: Date;
        updated: Date;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        isArchived: boolean;
    })[]>;
    findAllAdmins(params: SearchStatusQueryDto): Promise<({
        Customer: {
            number: string;
            id: number;
            isArchived: boolean;
            userId: number;
        };
        Admin: {
            id: number;
            isArchived: boolean;
            lastLogin: Date | null;
            userId: number;
        };
        Barber: {
            id: number;
            isActive: boolean;
            isArchived: boolean;
            userId: number;
            skills: string;
            img: string | null;
        };
    } & {
        id: number;
        created: Date;
        updated: Date;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        isArchived: boolean;
    })[]>;
    findAllBarbers(params: SearchStatusQueryDto): Promise<({
        Customer: {
            number: string;
            id: number;
            isArchived: boolean;
            userId: number;
        };
        Admin: {
            id: number;
            isArchived: boolean;
            lastLogin: Date | null;
            userId: number;
        };
        Barber: {
            id: number;
            isActive: boolean;
            isArchived: boolean;
            userId: number;
            skills: string;
            img: string | null;
        };
    } & {
        id: number;
        created: Date;
        updated: Date;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        isArchived: boolean;
    })[]>;
    findOne(id: number): Promise<{
        id: number;
        created: Date;
        updated: Date;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        isArchived: boolean;
    }>;
    updateCustomer(id: number, updateClientDto: UpdateClientDto): Promise<{
        id: number;
        created: Date;
        updated: Date;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        isArchived: boolean;
    }>;
    updateBarber(id: number, updateBarberDto: UpdateBarberDto, file: Express.Multer.File): Promise<{
        id: number;
        created: Date;
        updated: Date;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        isArchived: boolean;
    }>;
    updateAdmin(id: number, UpdateAdminDto: UpdateAdminDto): Promise<{
        id: number;
        created: Date;
        updated: Date;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        isArchived: boolean;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
