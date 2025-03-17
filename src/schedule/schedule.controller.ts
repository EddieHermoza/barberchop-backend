import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ValidateId } from 'src/common/pipes/validate-id.pipe';
import { ValidateDate } from 'src/common/pipes/validate-date.pipe';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  findAll() {
    return this.scheduleService.findAll();
  }
  @Get('get-availability')
  async getAvailability(
    @Query('barberId', ValidateId) barberId: number,
    @Query('date', ValidateDate) date: Date,
  ) {
    return this.scheduleService.getAvailability(barberId, date);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheduleService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleService.remove(+id);
  }
}
