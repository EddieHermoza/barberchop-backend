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
    createClientUser(createClientDto: CreateClientDto): Promise<{
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
    createBarberUser(createBarberDto: CreateBarberDto, file?: Express.Multer.File): Promise<{
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
    findOne(id: number): Promise<{
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
    findBarber(id: number): Promise<{
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
        password: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        role: import(".prisma/client").$Enums.UserRole;
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
    findCustomer(id: number): Promise<{
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
        password: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        role: import(".prisma/client").$Enums.UserRole;
        isArchived: boolean;
    }>;
    updateAdmin(id: number, updateAdminDto: UpdateAdminDto): Promise<{
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
    updateBarber(id: number, updateBarberDto: UpdateBarberDto, file?: Express.Multer.File): Promise<{
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
    updateClient(id: number, updateClientDto: UpdateClientDto): Promise<{
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
    findOneByEmail(email: string): Promise<{
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
}
