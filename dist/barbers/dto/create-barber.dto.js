'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.CreateBarberDto = void 0;
const class_validator_1 = require('class-validator');
class CreateBarberDto {}
exports.CreateBarberDto = CreateBarberDto;
__decorate(
  [
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 50, {
      message: 'El nombre debe tener entre 2 y 50 caracteres.',
    }),
    __metadata('design:type', String),
  ],
  CreateBarberDto.prototype,
  'name',
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
      message: 'La imagen debe ser una url válida',
    }),
    __metadata('design:type', String),
  ],
  CreateBarberDto.prototype,
  'img',
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsBoolean)({
      message: 'El campo isActive debe ser un valor booleano.',
    }),
    __metadata('design:type', Boolean),
  ],
  CreateBarberDto.prototype,
  'isActive',
  void 0,
);
//# sourceMappingURL=create-barber.dto.js.map
