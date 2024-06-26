"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicosModule = void 0;
const common_1 = require("@nestjs/common");
const servicos_service_1 = require("./servicos.service");
const servicos_controller_1 = require("./servicos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const logs_module_1 = require("../logs/logs.module");
const servico_entity_1 = require("./servico.entity");
let ServicosModule = class ServicosModule {
};
exports.ServicosModule = ServicosModule;
exports.ServicosModule = ServicosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([servico_entity_1.Servico]),
            logs_module_1.LogsModule
        ],
        providers: [servicos_service_1.ServicosService],
        controllers: [servicos_controller_1.ServicosController],
        exports: [servicos_service_1.ServicosService]
    })
], ServicosModule);
//# sourceMappingURL=servicos.module.js.map