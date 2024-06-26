"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContratosTiposModule = void 0;
const common_1 = require("@nestjs/common");
const contratos_tipos_service_1 = require("./contratos-tipos.service");
const contratos_tipos_controller_1 = require("./contratos-tipos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const contrato_tipo_entity_1 = require("./contrato-tipo.entity");
const logs_module_1 = require("../logs/logs.module");
let ContratosTiposModule = class ContratosTiposModule {
};
exports.ContratosTiposModule = ContratosTiposModule;
exports.ContratosTiposModule = ContratosTiposModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([contrato_tipo_entity_1.ContratoTipo]),
            logs_module_1.LogsModule
        ],
        providers: [contratos_tipos_service_1.ContratosTiposService],
        controllers: [contratos_tipos_controller_1.ContratosTiposController],
        exports: [contratos_tipos_service_1.ContratosTiposService]
    })
], ContratosTiposModule);
//# sourceMappingURL=contratos-tipos.module.js.map