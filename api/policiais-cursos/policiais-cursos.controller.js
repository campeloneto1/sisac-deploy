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
exports.PoliciaisCursosController = void 0;
const common_1 = require("@nestjs/common");
const policiais_cursos_service_1 = require("./policiais-cursos.service");
let PoliciaisCursosController = class PoliciaisCursosController {
    constructor(policiaisCursosService) {
        this.policiaisCursosService = policiaisCursosService;
    }
    async index(req, params) {
        return this.policiaisCursosService.index(params, req.user);
    }
    async wherePol(id, req) {
        return await this.policiaisCursosService.wherePolicial(id, req.user);
    }
    async find(id, req) {
        return await this.policiaisCursosService.find(id, req.user);
    }
    async create(object, req) {
        return await this.policiaisCursosService.create(object, req.user);
    }
    async update(id, object, req) {
        return await this.policiaisCursosService.update(id, object, req.user);
    }
    async remove(id, req) {
        return await this.policiaisCursosService.remove(id, req.user);
    }
};
exports.PoliciaisCursosController = PoliciaisCursosController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PoliciaisCursosController.prototype, "index", null);
__decorate([
    (0, common_1.Get)(':id/wherepol'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PoliciaisCursosController.prototype, "wherePol", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PoliciaisCursosController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PoliciaisCursosController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], PoliciaisCursosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PoliciaisCursosController.prototype, "remove", null);
exports.PoliciaisCursosController = PoliciaisCursosController = __decorate([
    (0, common_1.Controller)('policiais-cursos'),
    __metadata("design:paramtypes", [policiais_cursos_service_1.PoliciaisCursosService])
], PoliciaisCursosController);
//# sourceMappingURL=policiais-cursos.controller.js.map