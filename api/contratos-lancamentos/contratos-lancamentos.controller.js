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
exports.ContratosLancamentosController = void 0;
const common_1 = require("@nestjs/common");
const contratos_lancamentos_service_1 = require("./contratos-lancamentos.service");
let ContratosLancamentosController = class ContratosLancamentosController {
    constructor(contratosLancamentosService) {
        this.contratosLancamentosService = contratosLancamentosService;
    }
    async index(req) {
        return this.contratosLancamentosService.index(req.user);
    }
    async find(id) {
        return await this.contratosLancamentosService.find(id);
    }
    async create(object, req) {
        return await this.contratosLancamentosService.create(object, req.user);
    }
    async update(id, object, req) {
        return await this.contratosLancamentosService.update(id, object, req.user);
    }
    async remove(id, req) {
        return await this.contratosLancamentosService.remove(id, req.user);
    }
};
exports.ContratosLancamentosController = ContratosLancamentosController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContratosLancamentosController.prototype, "index", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContratosLancamentosController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContratosLancamentosController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], ContratosLancamentosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ContratosLancamentosController.prototype, "remove", null);
exports.ContratosLancamentosController = ContratosLancamentosController = __decorate([
    (0, common_1.Controller)('contratos-lancamentos'),
    __metadata("design:paramtypes", [contratos_lancamentos_service_1.ContratosLancamentosService])
], ContratosLancamentosController);
//# sourceMappingURL=contratos-lancamentos.controller.js.map