import { HaircutsService } from './haircuts.service';
import { CreateHaircutDto } from './dto/create-haircut.dto';
import { UpdateHaircutDto } from './dto/update-haircut.dto';
export declare class HaircutsController {
  private readonly haircutsService;
  constructor(haircutsService: HaircutsService);
  create(createHaircutDto: CreateHaircutDto): string;
  findAll(): string;
  findOne(id: string): string;
  update(id: string, updateHaircutDto: UpdateHaircutDto): string;
  remove(id: string): string;
}
