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
Object.defineProperty(exports, '__esModule', { value: true });
exports.AppModule = void 0;
const common_1 = require('@nestjs/common');
const app_controller_1 = require('./app.controller');
const users_module_1 = require('./users/users.module');
const prisma_service_1 = require('./prisma/prisma.service');
const providers_module_1 = require('./providers/providers.module');
const auth_service_1 = require('./auth/auth.service');
const auth_module_1 = require('./auth/auth.module');
const products_module_1 = require('./products/products.module');
const cloudinary_service_1 = require('./cloudinary/cloudinary.service');
const inventory_module_1 = require('./inventory/inventory.module');
const sales_module_1 = require('./sales/sales.module');
const app_service_1 = require('./app.service');
const barbers_module_1 = require('./barbers/barbers.module');
const services_module_1 = require('./services/services.module');
const appointments_module_1 = require('./appointments/appointments.module');
const haircuts_module_1 = require('./haircuts/haircuts.module');
let AppModule = class AppModule {};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        users_module_1.UsersModule,
        providers_module_1.ProvidersModule,
        auth_module_1.AuthModule,
        products_module_1.ProductsModule,
        inventory_module_1.InventoryModule,
        sales_module_1.SalesModule,
        barbers_module_1.BarbersModule,
        services_module_1.ServicesModule,
        appointments_module_1.AppointmentsModule,
        haircuts_module_1.HaircutsModule,
      ],
      controllers: [app_controller_1.AppController],
      providers: [
        prisma_service_1.PrismaService,
        auth_service_1.AuthService,
        cloudinary_service_1.CloudinaryService,
        app_service_1.AppService,
      ],
    }),
  ],
  AppModule,
);
//# sourceMappingURL=app.module.js.map
