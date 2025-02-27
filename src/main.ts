import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Barbershop Backend')
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.get('/doc-json', (_, res) => res.json(document));

  SwaggerModule.setup('doc', app, document, {
    swaggerOptions: { url: '/doc-json' },
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
