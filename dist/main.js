"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const path_1 = require("path");
const fs_1 = require("fs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Barbershop Backend')
        .setDescription('API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/doc', app, document);
    await app.listen(process.env.PORT || 3000);
    if (process.env.NODE_ENV === 'development') {
        const pathToSwaggerStaticFolder = (0, path_1.resolve)(process.cwd(), 'swagger-static');
        const pathToSwaggerJson = (0, path_1.resolve)(pathToSwaggerStaticFolder, 'swagger.json');
        const swaggerJson = JSON.stringify(document, null, 2);
        (0, fs_1.writeFileSync)(pathToSwaggerJson, swaggerJson);
        console.log(`Swagger JSON file written to: '/swagger-static/swagger.json'`);
        await app.listen(process.env.PORT ?? 3000);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map