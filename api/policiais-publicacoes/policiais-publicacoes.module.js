"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliciaisPublicacoesModule = void 0;
const common_1 = require("@nestjs/common");
const policiais_publicacoes_service_1 = require("./policiais-publicacoes.service");
const policiais_publicacoes_controller_1 = require("./policiais-publicacoes.controller");
const typeorm_1 = require("@nestjs/typeorm");
const policial_publicacao_entity_1 = require("./policial-publicacao.entity");
const logs_module_1 = require("../logs/logs.module");
let PoliciaisPublicacoesModule = class PoliciaisPublicacoesModule {
};
exports.PoliciaisPublicacoesModule = PoliciaisPublicacoesModule;
exports.PoliciaisPublicacoesModule = PoliciaisPublicacoesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([policial_publicacao_entity_1.PolicialPublicacao]),
            logs_module_1.LogsModule
        ],
        providers: [policiais_publicacoes_service_1.PoliciaisPublicacoesService],
        controllers: [policiais_publicacoes_controller_1.PoliciaisPublicacoesController],
        exports: [policiais_publicacoes_service_1.PoliciaisPublicacoesService]
    })
], PoliciaisPublicacoesModule);
//# sourceMappingURL=policiais-publicacoes.module.js.map