import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryProps } from 'src/pipes/validate-query.pipe';
import { Prisma } from '@prisma/client';
import { InventoryService } from 'src/inventory/inventory.service';

@Injectable()
export class SalesService {
  constructor(
    private readonly db: PrismaService,
    private readonly InventoryService: InventoryService,
  ) {}
  async create(createSaleDto: CreateSaleDto) {
    return await this.db.$transaction(async (prisma) => {
      const sale = await prisma.sale.create({
        data: {
          ...createSaleDto,
          SaleItem: {
            createMany: {
              data: createSaleDto.saleItems,
            },
          },
        },
      });

      await Promise.all(
        createSaleDto.saleItems.map(async (item) => {
          await this.InventoryService.updateProductStock(
            item.productId,
            item.quantity,
            'SALIDA',
          );
        }),
      );

      return sale;
    });
  }

  async findAll({ limit, page, query }: QueryProps) {
    const pages = page || 1;
    const skip = (pages - 1) * limit;
    return await this.db.sale.findMany({
      where: {
        AND: [
          query
            ? {
                transaction: {
                  contains: query,
                  mode: Prisma.QueryMode.insensitive,
                },
              }
            : {},
        ],
      },
      skip: skip,
      take: limit,
    });
  }

  async findOne(id: number) {
    const sale = await this.db.sale.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        created: true,
        transaction: true,
        amount: true,
        discount: true,
        totalAmount: true,
        paymentMethod: true,
        status: true,
        User: {
          select: {
            id: true,
            name: true,
            lastName: true,
            email: true,
          },
        },
        SaleItem: {
          select: {
            id: true,
            productId: true,
            productName: true,
            quantity: true,
            price: true,
            discount: true,
          },
        },
      },
    });

    if (!sale) throw new BadRequestException(`La venta del id ${id} no existe`);

    return sale;
  }

  async remove(id: number) {
    const sale = await this.db.sale.delete({
      where: {
        id,
      },
    });

    if (!sale) throw new BadRequestException(`La venta del id ${id} no existe`);
  }
}
