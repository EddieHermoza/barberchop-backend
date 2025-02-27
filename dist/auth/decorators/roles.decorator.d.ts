import { UserRole } from '@prisma/client';
export declare const ROLES_KEY = "ROLES";
export declare const Roles: (role: UserRole[]) => import("@nestjs/common").CustomDecorator<string>;
