import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppointmentsService } from 'src/appointments/appointments.service';
import { AppointmentPaymentQueryDto } from './dto/appointmentPayment-query.dto';

@Injectable()
export class PaymentsService {
  constructor(
    private readonly db: PrismaService,
    private readonly appointmentsService: AppointmentsService,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    try {
      const payment = await this.db.appointmentPayment.create({
        data: createPaymentDto,
      });

      return payment;
    } catch (error) {
      console.log(error);
      throw new Error('Hubo un error en el registro del pago de cita');
    }
  }

  async findAll({ limit, payment, page, status }: AppointmentPaymentQueryDto) {
    const pages = page || 1;
    const skip = (pages - 1) * limit;
    return this.db.appointmentPayment.findMany({
      where: {
        ...(payment ? { method: payment } : {}),
        ...(payment ? { status: status } : {}),
      },
      skip: skip,
      take: limit,
    });
  }

  async findOne(id: number) {
    const payment = await this.db.appointmentPayment.findUnique({
      where: { id },
    });

    if (!payment) {
      throw new NotFoundException(`Pago con el ${id} no encontrado`);
    }

    return payment;
  }

  async remove(id: number) {
    await this.findOne(id);

    const deletedPayment = await this.db.appointmentPayment.delete({
      where: { id },
    });

    if (deletedPayment)
      return { message: `Pago con el ID ${id} fue eliminado` };
  }
}
