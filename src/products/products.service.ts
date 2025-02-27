import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryProps } from '../pipes/validate-query.pipe';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly db: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return await this.db.product.create({
      data: createProductDto,
    });
  }

  async findAll({ limit, page, status, query }: QueryProps) {
    const pages = page || 1;
    const skip = (pages - 1) * limit;

    return await this.db.product.findMany({
      select: {
        id: true,
        created: true,
        updated: true,
        name: true,
        description: true,
        img: true,
        price: true,
        discount: true,
        orderLimit: true,
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

  async findOne(id: number) {
    const product = await this.db.product.findFirst({
      where: {
        id,
        isArchived: false,
      },
    });

    if (!product)
      throw new NotFoundException(`El producto del id ${id} no existe`);

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    let updatedProduct;
    try {
      updatedProduct = await this.db.product.update({
        where: {
          id,
          isArchived: false,
        },
        data: updateProductDto,
      });
    } catch (error: any) {
      if (error.code === 'P2025')
        throw new NotFoundException(`El producto del id ${id} no existe`);
    }

    if (!updatedProduct)
      throw new NotFoundException(`El producto del id ${id} no existe`);

    return updatedProduct;
  }

  async remove(id: number) {
    let archivedProduct;
    try {
      archivedProduct = await this.db.product.update({
        where: {
          id,
        },
        data: {
          isActive: false,
          isArchived: true,
        },
      });
    } catch (error: any) {
      if (error.code === 'P2025')
        throw new NotFoundException(`El producto del id ${id} no existe`);
    }

    if (!archivedProduct)
      throw new NotFoundException(`El producto del id ${id} no existe`);

    return archivedProduct;
  }
}
