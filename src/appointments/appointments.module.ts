import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServicesModule } from 'src/services/services.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [ServicesModule, UsersModule],
  exports: [AppointmentsService],
  controllers: [AppointmentsController],
  providers: [AppointmentsService, PrismaService],
})
export class AppointmentsModule {}
