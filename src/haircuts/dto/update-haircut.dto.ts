import { PartialType } from '@nestjs/mapped-types';
import { CreateHaircutDto } from './create-haircut.dto';

export class UpdateHaircutDto extends PartialType(CreateHaircutDto) {}
