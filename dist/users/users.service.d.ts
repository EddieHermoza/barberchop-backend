import { PrismaService } from '../prisma/prisma.service';
import { UserRole } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { CreateAdminDto } from './dto/create-admin.dto';
import { CreateClientDto } from './dto/create-client.dto';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class UsersService {
    private readonly db;
    private readonly cloudinaryService;
    constructor(db: PrismaService, cloudinaryService: CloudinaryService);
    createAdminUser(createAdminDto: CreateAdminDto): Promise<{
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
    createClientUser(createClientDto: CreateClientDto): Promise<{
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
    createBarberUser(createBarberDto: CreateBarberDto, file?: Express.Multer.File): Promise<{
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
    findAll(role: UserRole, { limit, query, status, page }: SearchStatusQueryDto): Promise<({
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
    findBarber(id: number): Promise<{
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
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        isArchived: boolean;
    }>;
    findAdmin(id: number): Promise<{
        Admin: {
            id: number;
            isArchived: boolean;
            lastLogin: Date | null;
            userId: number;
        };
    } & {
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
    findCustomer(id: number): Promise<{
        Customer: {
            number: string;
            id: number;
            isArchived: boolean;
            userId: number;
        };
    } & {
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
    updateAdmin(id: number, updateAdminDto: UpdateAdminDto): Promise<{
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
    updateBarber(id: number, updateBarberDto: UpdateBarberDto, file?: Express.Multer.File): Promise<{
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
    updateClient(id: number, updateClientDto: UpdateClientDto): Promise<{
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
    findOneByEmail(email: string): Promise<{
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
}
