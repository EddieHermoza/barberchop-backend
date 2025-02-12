import { CreateHaircutDto } from './dto/create-haircut.dto';
import { UpdateHaircutDto } from './dto/update-haircut.dto';
export declare class HaircutsService {
  create(createHaircutDto: CreateHaircutDto): string;
  findAll(): string;
  findOne(id: number): string;
  update(id: number, updateHaircutDto: UpdateHaircutDto): string;
  remove(id: number): string;
}
