import { UserRole } from '@prisma/client';

export interface IUserSession {
  id: number;
  username: string;
  email: string;
  role: UserRole;
}
