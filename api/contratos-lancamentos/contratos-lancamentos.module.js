"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContratosLancamentosModule = void 0;
const common_1 = require("@nestjs/common");
const contratos_lancamentos_service_1 = require("./contratos-lancamentos.service");
const contratos_lancamentos_controller_1 = require("./contratos-lancamentos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const contrato_lancamento_entity_1 = require("./contrato-lancamento.entity");
const logs_module_1 = require("../logs/logs.module");
const contratos_module_1 = require("../contratos/contratos.module");
let ContratosLancamentosModule = class ContratosLancamentosModule {
};
exports.ContratosLancamentosModule = ContratosLancamentosModule;
exports.ContratosLancamentosModule = ContratosLancamentosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([contrato_lancamento_entity_1.ContratoLancamento]),
            contratos_module_1.ContratosModule,
            logs_module_1.LogsModule
        ],
        providers: [contratos_lancamentos_service_1.ContratosLancamentosService],
        controllers: [contratos_lancamentos_controller_1.ContratosLancamentosController],
        exports: [contratos_lancamentos_service_1.ContratosLancamentosService]
    })
], ContratosLancamentosModule);
//# sourceMappingURL=contratos-lancamentos.module.js.map