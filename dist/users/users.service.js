"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let UsersService = class UsersService {
    constructor(db, cloudinaryService) {
        this.db = db;
        this.cloudinaryService = cloudinaryService;
    }
    async createAdminUser(createAdminDto) {
        return await this.db.user.create({
            data: {
                ...createAdminDto,
                role: client_1.UserRole.ADMINISTRADOR,
                Admin: {
                    create: {},
                },
            },
        });
    }
    async createCustomerUser(createClientDto) {
        const { number, ...userData } = createClientDto;
        return await this.db.user.create({
            data: {
                ...userData,
                role: client_1.UserRole.CLIENTE,
                Customer: {
                    create: { number },
                },
            },
        });
    }
    async createBarberUser(createBarberDto, file) {
        createBarberDto.img = await this.cloudinaryService.uploadImage(file);
        const { skills, isActiveBarber, img, ...userData } = createBarberDto;
        return await this.db.user.create({
            data: {
                ...userData,
                role: client_1.UserRole.BARBERO,
                Barber: {
                    create: { skills, isActive: isActiveBarber, img },
                },
            },
        });
    }
    async findAll(role, { limit, query, status, page }) {
        const pages = page || 1;
        const skip = (pages - 1) * limit;
        const roleFilter = role
            ? role === client_1.UserRole.ADMINISTRADOR
                ? { Admin: { isArchived: false } }
                : role === client_1.UserRole.BARBERO
                    ? { Barber: { isArchived: false } }
                    : role === client_1.UserRole.CLIENTE
                        ? { Customer: { isArchived: false } }
                        : {}
            : {};
        return await this.db.user.findMany({
            omit: {
                password: true,
            },
            include: {
                Admin: true,
                Customer: true,
                Barber: true,
            },
            where: {
                AND: [
                    query
                        ? { name: { contains: query, mode: client_1.Prisma.QueryMode.insensitive } }
                        : {},
                    status !== null && status !== undefined ? { isActive: status } : {},
                    roleFilter,
                ],
                isArchived: false,
            },
            skip: skip,
            take: limit,
        });
    }
    async findOne(id) {
        const user = await this.db.user.findFirst({
            omit: {
                password: true,
            },
            where: {
                id,
                isArchived: false,
            },
        });
        if (!user)
            throw new common_1.NotFoundException(`El usuario del id ${id} no existe`);
        return user;
    }
    async findBarber(id) {
        const user = await this.db.user.findFirst({
            omit: {
                password: true,
            },
            where: {
                id,
                isArchived: false,
                Barber: {
                    isArchived: false,
                },
            },
            include: {
                Barber: true,
            },
        });
        if (!user)
            throw new common_1.NotFoundException(`El Barbero del id ${id} no existe`);
        return user;
    }
    async findAdmin(id) {
        const user = await this.db.user.findFirst({
            omit: {
                password: true,
            },
            where: {
                id,
                isArchived: false,
                Admin: {
                    isArchived: false,
                },
            },
            include: {
                Admin: true,
            },
        });
        if (!user)
            throw new common_1.NotFoundException(`El Administrador del id ${id} no existe`);
        return user;
    }
    async findCustomer(id) {
        const user = await this.db.user.findFirst({
            omit: {
                password: true,
            },
            where: {
                id,
                isArchived: false,
                Customer: {
                    isArchived: false,
                },
            },
            include: {
                Customer: true,
            },
        });
        if (!user)
            throw new common_1.NotFoundException(`El Cliente del id ${id} no existe`);
        return user;
    }
    async updateAdmin(id, updateAdminDto) {
        try {
            const user = await this.db.user.findUnique({
                where: { id },
                include: { Admin: true },
            });
            if (!user || !user.Admin) {
                throw new common_1.NotFoundException(`El usuario del id ${id} no existe o no es un administrador`);
            }
            const updatedUser = await this.db.user.update({
                where: {
                    id,
                    isArchived: false,
                },
                data: {
                    ...updateAdminDto,
                    Admin: {
                        update: {},
                    },
                },
            });
            return updatedUser;
        }
        catch (error) {
            if ((error.code = 'P2025'))
                throw new common_1.NotFoundException(`El usuario del id ${id} no existe`);
            throw error;
        }
    }
    async updateBarber(id, updateBarberDto, file) {
        updateBarberDto.img = await this.cloudinaryService.uploadImage(file);
        const { skills, isActiveBarber } = updateBarberDto;
        try {
            const user = await this.db.user.findUnique({
                where: { id },
                include: { Barber: true },
            });
            if (!user || !user.Barber) {
                throw new common_1.NotFoundException(`El usuario del id ${id} no existe o no es un barber`);
            }
            const updatedUser = await this.db.user.update({
                where: {
                    id,
                    isArchived: false,
                },
                data: {
                    ...updateBarberDto,
                    Barber: {
                        update: {
                            ...(skills ? { skills } : {}),
                            ...(isActiveBarber ? { isActive: isActiveBarber } : {}),
                        },
                    },
                },
            });
            return updatedUser;
        }
        catch (error) {
            if ((error.code = 'P2025'))
                throw new common_1.NotFoundException(`El usuario del id ${id} no existe`);
            throw error;
        }
    }
    async updateCustomer(id, updateClientDto) {
        const { number } = updateClientDto;
        try {
            const user = await this.db.user.findUnique({
                where: { id },
                include: { Customer: true },
            });
            if (!user || !user.Customer) {
                throw new common_1.NotFoundException(`El usuario del id ${id} no existe o no es un cliente`);
            }
            const updatedUser = await this.db.user.update({
                where: {
                    id,
                    isArchived: false,
                },
                data: {
                    ...updateClientDto,
                    Customer: {
                        update: {
                            ...(number ? { number } : {}),
                        },
                    },
                },
            });
            return updatedUser;
        }
        catch (error) {
            if ((error.code = 'P2025'))
                throw new common_1.NotFoundException(`El usuario del id ${id} no existe`);
            throw error;
        }
    }
    async remove(id) {
        try {
            const user = await this.db.user.findUnique({
                where: { id },
                include: { Admin: true, Barber: true, Customer: true },
            });
            if (!user) {
                throw new common_1.NotFoundException(`El usuario del id ${id} no existe`);
            }
            const updateData = {
                isActive: false,
                isArchived: true,
            };
            if (user.Admin) {
                updateData.Admin = {
                    update: {
                        isActive: false,
                        isArchived: true,
                    },
                };
            }
            if (user.Barber) {
                updateData.Barber = {
                    update: {
                        isActive: false,
                        isArchived: true,
                    },
                };
            }
            if (user.Customer) {
                updateData.Client = {
                    update: {
                        isActive: false,
                        isArchived: true,
                    },
                };
            }
            const archivedUser = await this.db.user.update({
                where: { id },
                data: updateData,
            });
            if (archivedUser)
                return { message: `El usuario con el ID ${id} fue archivado` };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`El usuario del id ${id} no existe`);
            }
            throw error;
        }
    }
    async findOneByEmail(email) {
        const user = await this.db.user.findFirst({
            where: {
                email,
                isActive: true,
                isArchived: false,
            },
            include: {
                Admin: true,
                Barber: true,
                Customer: true,
            },
        });
        if (!user)
            throw new common_1.NotFoundException(`El usuario del email ${email} no existe`);
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        cloudinary_service_1.CloudinaryService])
], UsersService);
//# sourceMappingURL=users.service.js.map