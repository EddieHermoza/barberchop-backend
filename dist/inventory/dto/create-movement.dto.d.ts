import { MovementType } from "@prisma/client";
export declare class CreateMovementDto {
    productId: number;
    quantity: number;
    notes: string;
    type: MovementType;
}
