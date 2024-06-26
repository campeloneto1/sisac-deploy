"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeModule = void 0;
const common_1 = require("@nestjs/common");
const home_service_1 = require("./home.service");
const home_controller_1 = require("./home.controller");
const policiais_module_1 = require("../policiais/policiais.module");
const policiais_atestados_module_1 = require("../policiais-atestados/policiais-atestados.module");
const policiais_ferias_module_1 = require("../policiais-ferias/policiais-ferias.module");
const setores_module_1 = require("../setores/setores.module");
const armamentos_module_1 = require("../armamentos/armamentos.module");
const veiculos_oficinas_module_1 = require("../veiculos-oficinas/veiculos-oficinas.module");
const veiculos_module_1 = require("../veiculos/veiculos.module");
const veiculos_policiais_module_1 = require("../veiculos-policiais/veiculos-policiais.module");
const armamentos_emprestimos_module_1 = require("../armamentos-emprestimos/armamentos-emprestimos.module");
const graduacoes_module_1 = require("../graduacoes/graduacoes.module");
const materiais_consumo_module_1 = require("../materiais-consumo/materiais-consumo.module");
const materiais_policiais_module_1 = require("../materiais-policiais/materiais-policiais.module");
const materiais_module_1 = require("../materiais/materiais.module");
const policiais_requeridas_module_1 = require("../policiais-requeridas/policiais-requeridas.module");
const contratos_module_1 = require("../contratos/contratos.module");
let HomeModule = class HomeModule {
};
exports.HomeModule = HomeModule;
exports.HomeModule = HomeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            armamentos_module_1.ArmamentosModule,
            armamentos_emprestimos_module_1.ArmamentosEmprestimosModule,
            contratos_module_1.ContratosModule,
            graduacoes_module_1.GraduacoesModule,
            materiais_module_1.MateriaisModule,
            materiais_consumo_module_1.MateriaisConsumoModule,
            materiais_policiais_module_1.MateriaisPoliciaisModule,
            policiais_module_1.PoliciaisModule,
            policiais_atestados_module_1.PoliciaisAtestadosModule,
            policiais_ferias_module_1.PoliciaisFeriasModule,
            policiais_requeridas_module_1.PoliciaisRequeridasModule,
            setores_module_1.SetoresModule,
            veiculos_module_1.VeiculosModule,
            veiculos_oficinas_module_1.VeiculosOficinasModule,
            veiculos_policiais_module_1.VeiculosPoliciaisModule
        ],
        providers: [home_service_1.HomeService],
        controllers: [home_controller_1.HomeController],
        exports: [home_service_1.HomeService]
    })
], HomeModule);
//# sourceMappingURL=home.module.js.map