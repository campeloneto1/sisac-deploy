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
exports.MateriaisController = void 0;
const common_1 = require("@nestjs/common");
const materiais_service_1 = require("./materiais.service");
let MateriaisController = class MateriaisController {
    constructor(materiaisService) {
        this.materiaisService = materiaisService;
    }
    async index(req, params) {
        return this.materiaisService.index(params, req.user);
    }
    async disponiveis(req, params) {
        return this.materiaisService.disponiveis(params, req.user);
    }
    async vencendo(req, params) {
        return this.materiaisService.vencendo(params, req.user);
    }
    async find(id, req) {
        return await this.materiaisService.find(id, req.user);
    }
    async create(object, req) {
        return await this.materiaisService.create(object, req.user);
    }
    async update(id, object, req) {
        return await this.materiaisService.update(id, object, req.user);
    }
    async remove(id, req) {
        return await this.materiaisService.remove(id, req.user);
    }
    async relatorio(object, req) {
        return await this.materiaisService.relatorio(object, req.user);
    }
};
exports.MateriaisController = MateriaisController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "index", null);
__decorate([
    (0, common_1.Get)('disponiveis'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "disponiveis", null);
__decorate([
    (0, common_1.Get)('vencendo'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "vencendo", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('relatorio'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MateriaisController.prototype, "relatorio", null);
exports.MateriaisController = MateriaisController = __decorate([
    (0, common_1.Controller)('materiais'),
    __metadata("design:paramtypes", [materiais_service_1.MateriaisService])
], MateriaisController);
//# sourceMappingURL=materiais.controller.js.map