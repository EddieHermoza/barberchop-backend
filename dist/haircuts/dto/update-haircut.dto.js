"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHaircutDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_haircut_dto_1 = require("./create-haircut.dto");
class UpdateHaircutDto extends (0, mapped_types_1.PartialType)(create_haircut_dto_1.CreateHaircutDto) {
}
exports.UpdateHaircutDto = UpdateHaircutDto;
//# sourceMappingURL=update-haircut.dto.js.map