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
exports.MateriaisConsumoTiposController = void 0;
const common_1 = require("@nestjs/common");
const materiais_consumo_tipos_service_1 = require("./materiais-consumo-tipos.service");
let MateriaisConsumoTiposController = class MateriaisConsumoTiposController {
    constructor(materialConsumoTiposService) {
        this.materialConsumoTiposService = materialConsumoTiposService;
    }
    async index() {
        return this.materialConsumoTiposService.index();
    }
    async find(id) {
        return await this.materialConsumoTiposService.find(id);
    }
    async create(object, req) {
        return await this.materialConsumoTiposService.create(object, req.user);
    }
    async update(id, object, req) {
        return await this.materialConsumoTiposService.update(id, object, req.user);
    }
    async remove(id, req) {
        return await this.materialConsumoTiposService.remove(id, req.user);
    }
};
exports.MateriaisConsumoTiposController = MateriaisConsumoTiposController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MateriaisConsumoTiposController.prototype, "index", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MateriaisConsumoTiposController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MateriaisConsumoTiposController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], MateriaisConsumoTiposController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MateriaisConsumoTiposController.prototype, "remove", null);
exports.MateriaisConsumoTiposController = MateriaisConsumoTiposController = __decorate([
    (0, common_1.Controller)('materiais-consumo-tipos'),
    __metadata("design:paramtypes", [materiais_consumo_tipos_service_1.MateriaisConsumoTiposService])
], MateriaisConsumoTiposController);
//# sourceMappingURL=materiais-consumo-tipos.controller.js.map