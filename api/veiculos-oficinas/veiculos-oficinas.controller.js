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
exports.VeiculosOficinasController = void 0;
const common_1 = require("@nestjs/common");
const veiculos_oficinas_service_1 = require("./veiculos-oficinas.service");
let VeiculosOficinasController = class VeiculosOficinasController {
    constructor(veiculosOficinasService) {
        this.veiculosOficinasService = veiculosOficinasService;
    }
    async index(req, params) {
        return this.veiculosOficinasService.index(params, req.user);
    }
    async emmanutencao(req, params) {
        return this.veiculosOficinasService.emmanutencao(params, req.user);
    }
    async find(id, req) {
        return await this.veiculosOficinasService.find(id, req.user);
    }
    async create(object, req) {
        return await this.veiculosOficinasService.create(object, req.user);
    }
    async update(id, object, req) {
        return await this.veiculosOficinasService.update(id, object, req.user);
    }
    async remove(id, req) {
        return await this.veiculosOficinasService.remove(id, req.user);
    }
    async receber(object, req) {
        return await this.veiculosOficinasService.receber(object, req.user);
    }
    async relatorio(object, req) {
        return await this.veiculosOficinasService.relatorio(object, req.user);
    }
};
exports.VeiculosOficinasController = VeiculosOficinasController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VeiculosOficinasController.prototype, "index", null);
__decorate([
    (0, common_1.Get)('emmanutencao'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VeiculosOficinasController.prototype, "emmanutencao", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], VeiculosOficinasController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VeiculosOficinasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], VeiculosOficinasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], VeiculosOficinasController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('receber'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VeiculosOficinasController.prototype, "receber", null);
__decorate([
    (0, common_1.Post)('relatorio'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VeiculosOficinasController.prototype, "relatorio", null);
exports.VeiculosOficinasController = VeiculosOficinasController = __decorate([
    (0, common_1.Controller)('veiculos-oficinas'),
    __metadata("design:paramtypes", [veiculos_oficinas_service_1.VeiculosOficinasService])
], VeiculosOficinasController);
//# sourceMappingURL=veiculos-oficinas.controller.js.map