"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_service_dto_1 = require("./create-service.dto");
class UpdateServiceDto extends (0, mapped_types_1.PartialType)(create_service_dto_1.CreateServiceDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateServiceDto = UpdateServiceDto;
//# sourceMappingURL=update-service.dto.js.map