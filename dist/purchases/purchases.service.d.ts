import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PurchasesService {
    private readonly db;
    constructor(db: PrismaService);
    create(createPurchaseDto: CreatePurchaseDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePurchaseDto: UpdatePurchaseDto): string;
    remove(id: number): string;
}
