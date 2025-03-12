"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdminDto = void 0;
const openapi = require("@nestjs/swagger");
const create_user_dto_1 = require("./create-user.dto");
class CreateAdminDto extends create_user_dto_1.CreateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateAdminDto = CreateAdminDto;
//# sourceMappingURL=create-admin.dto.js.map