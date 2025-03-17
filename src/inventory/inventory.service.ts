import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateMovementDto } from './dto/create-movement.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsService } from '../products/products.service';
import { Prisma } from '@prisma/client';
import { SearchStatusQueryDto } from 'src/common/dto/search-status-query.dto';
import { MovementQueryDto } from './dto/movement-query.dto';
import { ProductCategoryQueryDto } from './dto/product-category-query.dto';

@Injectable()
export class InventoryService {
  constructor(
    private readonly db: PrismaService,
    private readonly productService: ProductsService,
  ) {}

  async createMovement(createMovementDto: CreateMovementDto) {
    const { type, quantity, productId } = createMovementDto;

    if (createMovementDto.type === 'SALIDA') {
      const product = await this.productService.findOne(
        createMovementDto.productId,
      );

      if (product.stock < createMovementDto.quantity)
        throw new BadRequestException(
          'El producto no tiene el suficiente stock para realizar el movimiento',
        );
    }

    await this.updateProductStock(productId, quantity, type);

    return await this.db.movement.create({
      data: createMovementDto,
    });
  }

  async findAvailaibleProducts({
    page,
    limit,
    query,
    category,
  }: ProductCategoryQueryDto) {
    const pages = page || 1;
    const skip = (pages - 1) * limit;
    return await this.db.product.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        category: true,
        stock: true,
        orderLimit: true,
        img: true,
        price: true,
        discount: true,
      },
      where: {
        AND: [
          query
            ? {
                name: {
                  contains: query,
                  mode: Prisma.QueryMode.insensitive,
                },
              }
            : {},
          category
            ? {
                category: {
                  equals: category,
                },
              }
            : {},
        ],
        stock: { gt: 0 },
        isActive: true,
        isArchived: false,
      },
      skip: skip,
      take: limit,
    });
  }

  async findAllProductsInventory({
    page,
    limit,
    query,
    status,
  }: SearchStatusQueryDto) {
    const pages = page || 1;
    const skip = (pages - 1) * limit;

    return await this.db.product.findMany({
      select: {
        id: true,
        name: true,
        stock: true,
        lastStockEntry: true,
        isActive: true,
      },
      where: {
        AND: [
          query
            ? { name: { contains: query, mode: Prisma.QueryMode.insensitive } }
            : {},
          status !== null && status !== undefined ? { isActive: status } : {},
        ],
        isArchived: false,
      },
      skip: skip,
      take: limit,
    });
  }

  async findAllMovements({ page, limit, status }: MovementQueryDto) {
    const pages = page || 1;
    const skip = (pages - 1) * limit;
    console.log(status);
    return await this.db.movement.findMany({
      include: {
        Product: {
          select: {
            name: true,
          },
        },
      },
      where: {
        AND: [status !== null && status !== undefined ? { type: status } : {}],
      },
      skip: skip,
      take: limit,
    });
  }

  async findOneMovement(id: number) {
    const movement = await this.db.movement.findFirst({
      where: {
        id,
      },
    });

    if (!movement)
      throw new NotFoundException(`El movimiento con el id ${id} no existe`);

    return movement;
  }

  async updateProductStock(productId: number, quantity: number, type: string) {
    const movementQuantity = type === 'ENTRADA' ? quantity : -quantity;

    try {
      const newStock = await this.db.product.update({
        where: {
          id: productId,
          isArchived: false,
        },
        data: {
          ...(type === 'ENTRADA' && { lastStockEntry: new Date() }),
          stock: { increment: movementQuantity },
        },
      });
      return newStock;
    } catch (error) {
      if ((error.code = 'P2025'))
        throw new NotFoundException(
          `El producto del id ${productId} no existe`,
        );

      throw error;
    }
  }
}
