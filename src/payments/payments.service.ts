import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppointmentsService } from 'src/appointments/appointments.service';

@Injectable()
export class PaymentsService {
  constructor(
    private readonly db: PrismaService,
    private readonly appointmentsService: AppointmentsService,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    return 'This action adds a new payment';
  }

  async findAll() {
    return `This action returns all payments`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  async remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
