import { applyDecorators, UseGuards } from '@nestjs/common';
import { UserRole } from '@prisma/client';
import { AuthGuard } from '../guards/auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from './roles.decorator';

export function Auth(role: UserRole[]) {
  return applyDecorators(Roles(role), UseGuards(AuthGuard, RolesGuard));
}
