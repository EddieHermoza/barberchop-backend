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
import { ServicesModule } from './services/services.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { HaircutsModule } from './haircuts/haircuts.module';
import { PurchasesModule } from './purchases/purchases.module';
import { PaymentsModule } from './payments/payments.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [
    UsersModule,
    ProvidersModule,
    AuthModule,
    ProductsModule,
    InventoryModule,
    SalesModule,
    ServicesModule,
    AppointmentsModule,
    HaircutsModule,
    PurchasesModule,
    PaymentsModule,
    CloudinaryModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [PrismaService, AuthService, CloudinaryService, AppService],
})
export class AppModule {}
