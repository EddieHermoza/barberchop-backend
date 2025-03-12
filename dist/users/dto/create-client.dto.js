"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_user_dto_1 = require("./create-user.dto");
class CreateClientDto extends create_user_dto_1.CreateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { number: { required: true, type: () => String, minLength: 9, maxLength: 9 } };
    }
}
exports.CreateClientDto = CreateClientDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(9, 9, { message: 'El número debe tener 9 caracteres.' }),
    __metadata("design:type", String)
], CreateClientDto.prototype, "number", void 0);
//# sourceMappingURL=create-client.dto.js.map