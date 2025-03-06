import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServicesModule } from 'src/services/services.module';
import { BarbersModule } from 'src/barbers/barbers.module';
import { UsersModule } from 'src/users/users.module';
import { BarbersService } from 'src/barbers/barbers.service';
import { UsersService } from 'src/users/users.service';
import { ServicesService } from 'src/services/services.service';

@Module({
  imports: [ServicesModule, BarbersModule, UsersModule],
  exports: [AppointmentsService],
  controllers: [AppointmentsController],
  providers: [
    AppointmentsService,
    BarbersService,
    UsersService,
    ServicesService,
    PrismaService,
  ],
})
export class AppointmentsModule {}
