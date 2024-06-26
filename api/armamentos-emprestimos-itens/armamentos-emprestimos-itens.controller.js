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
exports.ArmamentosEmprestimosItensController = void 0;
const common_1 = require("@nestjs/common");
const armamentos_emprestimos_itens_service_1 = require("./armamentos-emprestimos-itens.service");
let ArmamentosEmprestimosItensController = class ArmamentosEmprestimosItensController {
    constructor(armamentosEmprestimosItensService) {
        this.armamentosEmprestimosItensService = armamentosEmprestimosItensService;
    }
    async index() {
        return this.armamentosEmprestimosItensService.index();
    }
    async find(id) {
        return await this.armamentosEmprestimosItensService.find(id);
    }
    async create(object, req) {
        return await this.armamentosEmprestimosItensService.create(object, req.user);
    }
    async update(id, object, req) {
        return await this.armamentosEmprestimosItensService.update(id, object, req.user);
    }
    async remove(id, req) {
        return await this.armamentosEmprestimosItensService.remove(id, req.user);
    }
};
exports.ArmamentosEmprestimosItensController = ArmamentosEmprestimosItensController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArmamentosEmprestimosItensController.prototype, "index", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArmamentosEmprestimosItensController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArmamentosEmprestimosItensController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], ArmamentosEmprestimosItensController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ArmamentosEmprestimosItensController.prototype, "remove", null);
exports.ArmamentosEmprestimosItensController = ArmamentosEmprestimosItensController = __decorate([
    (0, common_1.Controller)('armamentos-emprestimos-itens'),
    __metadata("design:paramtypes", [armamentos_emprestimos_itens_service_1.ArmamentosEmprestimosItensService])
], ArmamentosEmprestimosItensController);
//# sourceMappingURL=armamentos-emprestimos-itens.controller.js.map