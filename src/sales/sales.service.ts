import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { InventoryService } from 'src/inventory/inventory.service';
import { SearchQueryDto } from 'src/common/dto/search-query.dto';

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

  async findAll({ limit, page, query }: SearchQueryDto) {
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
      include: {
        Customer: {
          include: {
            User: {
              omit: {
                password: true,
                created: true,
                updated: true,
                isActive: true,
                isArchived: true,
              },
            },
          },
        },
        SaleItem: {},
      },
    });

    if (!sale) throw new NotFoundException(`La venta del id ${id} no existe`);

    return sale;
  }

  async remove(id: number) {
    const sale = await this.db.sale.delete({
      where: {
        id,
      },
    });

    if (!sale) throw new NotFoundException(`La venta del id ${id} no existe`);
  }
}
