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
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        role: import(".prisma/client").$Enums.UserRole;
        isArchived: boolean;
    }>;
    createBarber(createBarberDto: CreateBarberDto, file?: Express.Multer.File): Promise<{
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        role: import(".prisma/client").$Enums.UserRole;
        isArchived: boolean;
    }>;
    createAdmin(createAdminDto: CreateAdminDto): Promise<{
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        role: import(".prisma/client").$Enums.UserRole;
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
            isActive: boolean;
            img: string | null;
            skills: string;
            id: number;
            isArchived: boolean;
            userId: number;
        };
    } & {
        dni: string;
        name: string;
        lastName: string;
        email: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        role: import(".prisma/client").$Enums.UserRole;
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
            isActive: boolean;
            img: string | null;
            skills: string;
            id: number;
            isArchived: boolean;
            userId: number;
        };
    } & {
        dni: string;
        name: string;
        lastName: string;
        email: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        role: import(".prisma/client").$Enums.UserRole;
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
            isActive: boolean;
            img: string | null;
            skills: string;
            id: number;
            isArchived: boolean;
            userId: number;
        };
    } & {
        dni: string;
        name: string;
        lastName: string;
        email: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        role: import(".prisma/client").$Enums.UserRole;
        isArchived: boolean;
    })[]>;
    findOneCustomer(id: number): Promise<{
        Customer: {
            number: string;
            id: number;
            isArchived: boolean;
            userId: number;
        };
    } & {
        dni: string;
        name: string;
        lastName: string;
        email: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        role: import(".prisma/client").$Enums.UserRole;
        isArchived: boolean;
    }>;
    findOneBarber(id: number): Promise<{
        Barber: {
            isActive: boolean;
            img: string | null;
            skills: string;
            id: number;
            isArchived: boolean;
            userId: number;
        };
    } & {
        dni: string;
        name: string;
        lastName: string;
        email: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        role: import(".prisma/client").$Enums.UserRole;
        isArchived: boolean;
    }>;
    findOneAdmin(id: number): Promise<{
        Admin: {
            id: number;
            isArchived: boolean;
            lastLogin: Date | null;
            userId: number;
        };
    } & {
        dni: string;
        name: string;
        lastName: string;
        email: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        role: import(".prisma/client").$Enums.UserRole;
        isArchived: boolean;
    }>;
    findOne(id: number): Promise<{
        dni: string;
        name: string;
        lastName: string;
        email: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        role: import(".prisma/client").$Enums.UserRole;
        isArchived: boolean;
    }>;
    updateCustomer(id: number, updateClientDto: UpdateClientDto): Promise<{
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        role: import(".prisma/client").$Enums.UserRole;
        isArchived: boolean;
    }>;
    updateBarber(id: number, updateBarberDto: UpdateBarberDto, file: Express.Multer.File): Promise<{
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        role: import(".prisma/client").$Enums.UserRole;
        isArchived: boolean;
    }>;
    updateAdmin(id: number, UpdateAdminDto: UpdateAdminDto): Promise<{
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        role: import(".prisma/client").$Enums.UserRole;
        isArchived: boolean;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
