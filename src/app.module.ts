import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { ProvidersModule } from './providers/providers.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { InventoryModule } from './inventory/inventory.module';
import { SalesModule } from './sales/sales.module';
import { AppService } from './app.service';
import { BarbersModule } from './barbers/barbers.module';
import { ServicesModule } from './services/services.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { HaircutsModule } from './haircuts/haircuts.module';
import { PurchasesModule } from './purchases/purchases.module';
import { PaymentsModule } from './payments/payments.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    ProvidersModule,
    AuthModule,
    ProductsModule,
    InventoryModule,
    SalesModule,
    BarbersModule,
    ServicesModule,
    AppointmentsModule,
    HaircutsModule,
    PurchasesModule,
    PaymentsModule,
    CloudinaryModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [PrismaService, AuthService, CloudinaryService, AppService],
})
export class AppModule {}
