"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmamentosModule = void 0;
const common_1 = require("@nestjs/common");
const armamentos_service_1 = require("./armamentos.service");
const armamentos_controller_1 = require("./armamentos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const armamento_entity_1 = require("./armamento.entity");
const logs_module_1 = require("../logs/logs.module");
let ArmamentosModule = class ArmamentosModule {
};
exports.ArmamentosModule = ArmamentosModule;
exports.ArmamentosModule = ArmamentosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([armamento_entity_1.Armamento]),
            logs_module_1.LogsModule
        ],
        providers: [armamentos_service_1.ArmamentosService],
        controllers: [armamentos_controller_1.ArmamentosController],
        exports: [armamentos_service_1.ArmamentosService]
    })
], ArmamentosModule);
//# sourceMappingURL=armamentos.module.js.map