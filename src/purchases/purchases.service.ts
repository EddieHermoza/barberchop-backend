import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { InventoryService } from 'src/inventory/inventory.service';
import { SearchQueryDto } from 'src/common/dto/search-query.dto';

@Injectable()
export class PurchasesService {
  constructor(
    private readonly db: PrismaService,
    private readonly InventoryService: InventoryService,
  ) {}

  async create(createPurchaseDto: CreatePurchaseDto) {
    const { PurchaseItem } = createPurchaseDto;
    return await this.db.$transaction(async (prisma) => {
      const purchase = await prisma.purchase.create({
        data: {
          ...createPurchaseDto,
          PurchaseItem: {
            createMany: {
              data: PurchaseItem,
            },
          },
        },
      });

      await Promise.all(
        createPurchaseDto.PurchaseItem.map(async (item) => {
          await this.InventoryService.updateProductStock(
            item.productId,
            item.quantity,
            'ENTRADA',
          );
        }),
      );

      return purchase;
    });
  }

  async findAll({ limit, page, query }: SearchQueryDto) {
    const pages = page || 1;
    const skip = (pages - 1) * limit;

    return await this.db.purchase.findMany({
      where: {
        AND: [
          query
            ? {
                receiptNumber: {
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
    const purchase = await this.db.purchase.findFirst({
      where: { id },
      include: {
        Admin: {
          select: {
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
        PurchaseItem: {},
        Provider: {
          select: {
            id: true,
            ruc: true,
            name: true,
          },
        },
      },
    });

    if (!purchase)
      throw new NotFoundException(`La compra del id ${id} no existe`);

    return purchase;
  }

  async remove(id: number) {
    await this.findOne(id);
    const purchase = await this.db.purchase.delete({
      where: { id },
    });

    return purchase;
  }
}
