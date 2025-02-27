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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HaircutsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const haircuts_service_1 = require("./haircuts.service");
const create_haircut_dto_1 = require("./dto/create-haircut.dto");
const update_haircut_dto_1 = require("./dto/update-haircut.dto");
let HaircutsController = class HaircutsController {
    constructor(haircutsService) {
        this.haircutsService = haircutsService;
    }
    create(createHaircutDto) {
        return this.haircutsService.create(createHaircutDto);
    }
    findAll() {
        return this.haircutsService.findAll();
    }
    findOne(id) {
        return this.haircutsService.findOne(+id);
    }
    update(id, updateHaircutDto) {
        return this.haircutsService.update(+id, updateHaircutDto);
    }
    remove(id) {
        return this.haircutsService.remove(+id);
    }
};
exports.HaircutsController = HaircutsController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_haircut_dto_1.CreateHaircutDto]),
    __metadata("design:returntype", void 0)
], HaircutsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HaircutsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HaircutsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_haircut_dto_1.UpdateHaircutDto]),
    __metadata("design:returntype", void 0)
], HaircutsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HaircutsController.prototype, "remove", null);
exports.HaircutsController = HaircutsController = __decorate([
    (0, common_1.Controller)('haircuts'),
    __metadata("design:paramtypes", [haircuts_service_1.HaircutsService])
], HaircutsController);
//# sourceMappingURL=haircuts.controller.js.map