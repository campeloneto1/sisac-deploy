"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelosModule = void 0;
const common_1 = require("@nestjs/common");
const modelos_service_1 = require("./modelos.service");
const modelos_controller_1 = require("./modelos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const modelo_entity_1 = require("./modelo.entity");
const logs_module_1 = require("../logs/logs.module");
let ModelosModule = class ModelosModule {
};
exports.ModelosModule = ModelosModule;
exports.ModelosModule = ModelosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([modelo_entity_1.Modelo]),
            logs_module_1.LogsModule
        ],
        providers: [modelos_service_1.ModelosService],
        controllers: [modelos_controller_1.ModelosController],
        exports: [modelos_service_1.ModelosService]
    })
], ModelosModule);
//# sourceMappingURL=modelos.module.js.map