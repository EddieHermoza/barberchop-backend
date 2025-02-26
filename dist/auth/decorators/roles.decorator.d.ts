import { UserRole } from '@prisma/client';
export declare const ROLES_KEY = "roles";
export declare const Roles: (role: UserRole[]) => import("@nestjs/common").CustomDecorator<string>;
