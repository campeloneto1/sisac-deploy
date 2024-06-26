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
exports.SubunidadesController = void 0;
const common_1 = require("@nestjs/common");
const subunidades_service_1 = require("./subunidades.service");
let SubunidadesController = class SubunidadesController {
    constructor(subunidadesService) {
        this.subunidadesService = subunidadesService;
    }
    async index(req, params) {
        return await this.subunidadesService.index(params, req.user);
    }
    async find(id) {
        return await this.subunidadesService.find(id);
    }
    async create(object, req) {
        return await this.subunidadesService.create(object, req.user);
    }
    async update(id, object, req) {
        return await this.subunidadesService.update(id, object, req.user);
    }
    async remove(id, req) {
        return await this.subunidadesService.remove(id, req.user);
    }
    async wherePais(id, req) {
        return await this.subunidadesService.whereUnidade(id, req.user);
    }
};
exports.SubunidadesController = SubunidadesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubunidadesController.prototype, "index", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SubunidadesController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubunidadesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], SubunidadesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SubunidadesController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/whereUnidade'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SubunidadesController.prototype, "wherePais", null);
exports.SubunidadesController = SubunidadesController = __decorate([
    (0, common_1.Controller)('subunidades'),
    __metadata("design:paramtypes", [subunidades_service_1.SubunidadesService])
], SubunidadesController);
//# sourceMappingURL=subunidades.controller.js.map