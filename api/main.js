"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const helmet_1 = require("helmet");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, helmet_1.default)());
    app.enableCors({
        origin: [
            'http://localhost:4200',
            'http://192.168.0.14:4200',
            'http://10.9.8.59:8080',
            'http://localhost:8080'
        ],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true,
    });
    await app.listen(process.env.SERV_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map