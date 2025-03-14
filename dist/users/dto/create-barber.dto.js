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
exports.CreateBarberDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_user_dto_1 = require("./create-user.dto");
const swagger_1 = require("@nestjs/swagger");
class CreateBarberDto extends create_user_dto_1.CreateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { skills: { required: true, type: () => String, minLength: 2, maxLength: 100 }, isActiveBarber: { required: true, type: () => Boolean } };
    }
}
exports.CreateBarberDto = CreateBarberDto;
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateBarberDto.prototype, "img", void 0);
__decorate([
    (0, class_validator_1.Length)(2, 100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBarberDto.prototype, "skills", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateBarberDto.prototype, "isActiveBarber", void 0);
//# sourceMappingURL=create-barber.dto.js.map