"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicacoesTiposModule = void 0;
const common_1 = require("@nestjs/common");
const publicacoes_tipos_service_1 = require("./publicacoes-tipos.service");
const publicacoes_tipos_controller_1 = require("./publicacoes-tipos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const publicacao_tipo_entity_1 = require("./publicacao-tipo.entity");
const logs_module_1 = require("../logs/logs.module");
let PublicacoesTiposModule = class PublicacoesTiposModule {
};
exports.PublicacoesTiposModule = PublicacoesTiposModule;
exports.PublicacoesTiposModule = PublicacoesTiposModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([publicacao_tipo_entity_1.PublicacaoTipo]),
            logs_module_1.LogsModule
        ],
        providers: [publicacoes_tipos_service_1.PublicacoesTiposService],
        controllers: [publicacoes_tipos_controller_1.PublicacoesTiposController],
        exports: [publicacoes_tipos_service_1.PublicacoesTiposService]
    })
], PublicacoesTiposModule);
//# sourceMappingURL=publicacoes-tipos.module.js.map