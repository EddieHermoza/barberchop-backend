"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBarberDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_barber_dto_1 = require("./create-barber.dto");
class UpdateBarberDto extends (0, mapped_types_1.PartialType)(create_barber_dto_1.CreateBarberDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateBarberDto = UpdateBarberDto;
//# sourceMappingURL=update-barber.dto.js.map