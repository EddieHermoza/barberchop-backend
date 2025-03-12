import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { ValidateId } from 'src/common/pipes/validate-id.pipe';
import { UserSession } from 'src/common/decorators/user-session.decorator';
import { IUserSession } from 'src/common/interfaces/user-session.interface';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { AppointmentStatus, UserRole } from '@prisma/client';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ValidateDate } from './pipes/validate-date.pipe';
import { AppointmentQueryDto } from './dto/appointment-query.dto';

@ApiBearerAuth()
@Auth([UserRole.CLIENTE, UserRole.ADMINISTRADOR])
@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  create(
    @UserSession() user: IUserSession,
    @Body() createAppointmentDto: CreateAppointmentDto,
  ) {
    createAppointmentDto.customerId = user.id;
    return this.appointmentsService.create(createAppointmentDto);
  }

  @Get()
  findAll(@Query() params: AppointmentQueryDto) {
    return this.appointmentsService.findAll(params);
  }

  @Get('/get-appointments-by-day/:date')
  findAllAppointementByDate(@Param('date', ValidateDate) date: Date) {
    return this.appointmentsService.findAppointmentsByDay(date);
  }

  @Get('/get-appointments-today')
  findAllAppointmentsToday() {
    return this.appointmentsService.findAppointmentsToday();
  }

  @Get('/get-appointments-by-barber/:barberId')
  findAllAppointmentsByBarber(@Param('barberId', ValidateId) barberId: number) {
    return this.appointmentsService.findAppointmentsByBarber(barberId);
  }

  @Get('/get-appointments-by-user/:userId')
  findAllAppointmentsByUser(@Param('userId', ValidateId) userId: number) {
    return this.appointmentsService.findAppointmentsByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id', ValidateId) id: number) {
    return this.appointmentsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ValidateId) id: number,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentsService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id', ValidateId) id: number) {
    return this.appointmentsService.remove(id);
  }

  @Patch(':id/confirm-appointment')
  confirmAppointment(@Param('id', ValidateId) id: number) {
    return this.appointmentsService.updateStatus(
      id,
      AppointmentStatus.CONFIRMADA,
    );
  }

  @Patch(':id/start-appointment')
  startAppointment(@Param('id', ValidateId) id: number) {
    return this.appointmentsService.updateStatus(
      id,
      AppointmentStatus.EN_PROCESO,
    );
  }

  @Patch(':id/cancel-appointment')
  cancelAppointment(@Param('id', ValidateId) id: number) {
    return this.appointmentsService.updateStatus(
      id,
      AppointmentStatus.CANCELADA,
    );
  }

  @Patch(':id/complete-appointment')
  completeAppointment(@Param('id', ValidateId) id: number) {
    return this.appointmentsService.updateStatus(
      id,
      AppointmentStatus.COMPLETADA,
    );
  }
}
