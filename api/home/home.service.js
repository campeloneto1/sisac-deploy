"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const armamentos_emprestimos_service_1 = require("../armamentos-emprestimos/armamentos-emprestimos.service");
const armamentos_service_1 = require("../armamentos/armamentos.service");
const contratos_service_1 = require("../contratos/contratos.service");
const graduacoes_service_1 = require("../graduacoes/graduacoes.service");
const materiais_consumo_service_1 = require("../materiais-consumo/materiais-consumo.service");
const materiais_policiais_service_1 = require("../materiais-policiais/materiais-policiais.service");
const materiais_service_1 = require("../materiais/materiais.service");
const policiais_atestados_service_1 = require("../policiais-atestados/policiais-atestados.service");
const policiais_ferias_service_1 = require("../policiais-ferias/policiais-ferias.service");
const policiais_requeridas_service_1 = require("../policiais-requeridas/policiais-requeridas.service");
const policiais_service_1 = require("../policiais/policiais.service");
const setores_service_1 = require("../setores/setores.service");
const veiculos_oficinas_service_1 = require("../veiculos-oficinas/veiculos-oficinas.service");
const veiculos_policiais_service_1 = require("../veiculos-policiais/veiculos-policiais.service");
const veiculos_service_1 = require("../veiculos/veiculos.service");
let HomeService = class HomeService {
    constructor(lazyModuleLoader, armamentosService, armamentosEmprestimosService, contratosService, graduacoesService, materiaisService, materiaisConsumoService, materiaisPoliciaisService, policiaisService, policiaisAtestadosService, policiaisFeriasService, policiaisRequeridas, veiculosService, veiculosOficinasService, veiculosPoliciaisService, setoresService) {
        this.lazyModuleLoader = lazyModuleLoader;
        this.armamentosService = armamentosService;
        this.armamentosEmprestimosService = armamentosEmprestimosService;
        this.contratosService = contratosService;
        this.graduacoesService = graduacoesService;
        this.materiaisService = materiaisService;
        this.materiaisConsumoService = materiaisConsumoService;
        this.materiaisPoliciaisService = materiaisPoliciaisService;
        this.policiaisService = policiaisService;
        this.policiaisAtestadosService = policiaisAtestadosService;
        this.policiaisFeriasService = policiaisFeriasService;
        this.policiaisRequeridas = policiaisRequeridas;
        this.veiculosService = veiculosService;
        this.veiculosOficinasService = veiculosOficinasService;
        this.veiculosPoliciaisService = veiculosPoliciaisService;
        this.setoresService = setoresService;
    }
    async armamentosEmprestados(params, idUser) {
        return this.armamentosEmprestimosService.emprestados(params, idUser);
    }
    async armamentosVencendo(params, idUser) {
        return this.armamentosService.vencendo(params, idUser);
    }
    async atestados(params, idUser) {
        return this.policiaisAtestadosService.quantidade(params, idUser);
    }
    async contratosAcabando(params, idUser) {
        return this.contratosService.acabando(params, idUser);
    }
    async ferias(params, idUser) {
        return this.policiaisFeriasService.quantidade(params, idUser);
    }
    async materiaisConsumoVencendo(params, idUser) {
        return this.materiaisConsumoService.vencendo(params, idUser);
    }
    async materiaisAlerta(params, idUser) {
        return this.materiaisConsumoService.alerta(params, idUser);
    }
    async materiaisEmprestados(params, idUser) {
        return this.materiaisPoliciaisService.emprestados(params, idUser);
    }
    async materiaisVencendo(params, idUser) {
        return this.materiaisService.vencendo(params, idUser);
    }
    async policiais(params, idUser) {
        return this.policiaisService.quantidade(params, idUser);
    }
    async policiaisGraduacoes(params, idUser) {
        return this.graduacoesService.policiaisGraduacoes(params, idUser);
    }
    async policiaisSetores(params, idUser) {
        return this.setoresService.policiaisSetor(params, idUser);
    }
    async requeridas(params, idUser) {
        return this.policiaisRequeridas.quantidade(params, idUser);
    }
    async veiculosManutencao(params, idUser) {
        return this.veiculosOficinasService.emmanutencao(params, idUser);
    }
    async veiculosTrocaOleo(params, idUser) {
        return this.veiculosService.trocaoleo(params, idUser);
    }
    async veiculosRevisao(params, idUser) {
        return this.veiculosService.revisao(params, idUser);
    }
    async veiculosEmprestados(params, idUser) {
        return this.veiculosPoliciaisService.emprestados(params, idUser);
    }
};
exports.HomeService = HomeService;
exports.HomeService = HomeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.LazyModuleLoader,
        armamentos_service_1.ArmamentosService,
        armamentos_emprestimos_service_1.ArmamentosEmprestimosService,
        contratos_service_1.ContratosService,
        graduacoes_service_1.GraduacoesService,
        materiais_service_1.MateriaisService,
        materiais_consumo_service_1.MateriaisConsumoService,
        materiais_policiais_service_1.MateriaisPoliciaisService,
        policiais_service_1.PoliciaisService,
        policiais_atestados_service_1.PoliciaisAtestadosService,
        policiais_ferias_service_1.PoliciaisFeriasService,
        policiais_requeridas_service_1.PoliciaisRequeridasService,
        veiculos_service_1.VeiculosService,
        veiculos_oficinas_service_1.VeiculosOficinasService,
        veiculos_policiais_service_1.VeiculosPoliciaisService,
        setores_service_1.SetoresService])
], HomeService);
//# sourceMappingURL=home.service.js.map