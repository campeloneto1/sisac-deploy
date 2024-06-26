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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const common_1 = require("@nestjs/common");
const home_service_1 = require("./home.service");
let HomeController = class HomeController {
    constructor(homeService) {
        this.homeService = homeService;
    }
    async armamentosVencendo(req, params) {
        return this.homeService.armamentosVencendo(params, req.user);
    }
    async armamentosEmprestimos(req, params) {
        return this.homeService.armamentosEmprestados(params, req.user);
    }
    async contratosAcabando(req, params) {
        return this.homeService.contratosAcabando(params, req.user);
    }
    async materiaisVencendo(req, params) {
        return this.homeService.materiaisVencendo(params, req.user);
    }
    async materiaisConsumoVencendo(req, params) {
        return this.homeService.materiaisConsumoVencendo(params, req.user);
    }
    async materiaisPoliciaisEmprestados(req, params) {
        return this.homeService.materiaisEmprestados(params, req.user);
    }
    async materiaisConsumoAlerta(req, params) {
        return this.homeService.materiaisAlerta(params, req.user);
    }
    async policiais(req, params) {
        return this.homeService.policiais(params, req.user);
    }
    async atestados(req, params) {
        return this.homeService.atestados(params, req.user);
    }
    async ferias(req, params) {
        return this.homeService.ferias(params, req.user);
    }
    async requeridas(req, params) {
        return this.homeService.requeridas(params, req.user);
    }
    async policiaisSetores(req, params) {
        return this.homeService.policiaisSetores(params, req.user);
    }
    async policiaisGraduacoes(req, params) {
        return this.homeService.policiaisGraduacoes(params, req.user);
    }
    async veiculosManutencao(req, params) {
        return this.homeService.veiculosManutencao(params, req.user);
    }
    async veiculosTrocaOleo(req, params) {
        return this.homeService.veiculosTrocaOleo(params, req.user);
    }
    async veiculosRevisao(req, params) {
        return this.homeService.veiculosRevisao(params, req.user);
    }
    async veiculosEmprestados(req, params) {
        return this.homeService.veiculosEmprestados(params, req.user);
    }
};
exports.HomeController = HomeController;
__decorate([
    (0, common_1.Get)('armamentos-vencendo'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "armamentosVencendo", null);
__decorate([
    (0, common_1.Get)('armamentos-emprestados'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "armamentosEmprestimos", null);
__decorate([
    (0, common_1.Get)('contratos-acabando'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "contratosAcabando", null);
__decorate([
    (0, common_1.Get)('materiais-vencendo'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "materiaisVencendo", null);
__decorate([
    (0, common_1.Get)('materiais-consumo-vencendo'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "materiaisConsumoVencendo", null);
__decorate([
    (0, common_1.Get)('materiais-policiais-emprestados'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "materiaisPoliciaisEmprestados", null);
__decorate([
    (0, common_1.Get)('materiais-consumo-alerta'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "materiaisConsumoAlerta", null);
__decorate([
    (0, common_1.Get)('policiais'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "policiais", null);
__decorate([
    (0, common_1.Get)('atestados'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "atestados", null);
__decorate([
    (0, common_1.Get)('ferias'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "ferias", null);
__decorate([
    (0, common_1.Get)('requeridas'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "requeridas", null);
__decorate([
    (0, common_1.Get)('policiais-setores'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "policiaisSetores", null);
__decorate([
    (0, common_1.Get)('policiais-graduacoes'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "policiaisGraduacoes", null);
__decorate([
    (0, common_1.Get)('veiculos-manutencao'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "veiculosManutencao", null);
__decorate([
    (0, common_1.Get)('veiculos-troca-oleo'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "veiculosTrocaOleo", null);
__decorate([
    (0, common_1.Get)('veiculos-revisao'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "veiculosRevisao", null);
__decorate([
    (0, common_1.Get)('veiculos-emprestados'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "veiculosEmprestados", null);
exports.HomeController = HomeController = __decorate([
    (0, common_1.Controller)('home'),
    __metadata("design:paramtypes", [home_service_1.HomeService])
], HomeController);
//# sourceMappingURL=home.controller.js.map