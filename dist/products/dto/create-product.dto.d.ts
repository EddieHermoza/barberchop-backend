import { ProductCategory } from '@prisma/client';
export declare class CreateProductDto {
    name: string;
    description: string;
    category: ProductCategory;
    img: string;
    orderLimit: number;
    discount: number;
    price: number;
    isActive: boolean;
}
