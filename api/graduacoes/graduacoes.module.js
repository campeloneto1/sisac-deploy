"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraduacoesModule = void 0;
const common_1 = require("@nestjs/common");
const graduacoes_service_1 = require("./graduacoes.service");
const graduacoes_controller_1 = require("./graduacoes.controller");
const typeorm_1 = require("@nestjs/typeorm");
const graduacao_entity_1 = require("./graduacao.entity");
const logs_module_1 = require("../logs/logs.module");
let GraduacoesModule = class GraduacoesModule {
};
exports.GraduacoesModule = GraduacoesModule;
exports.GraduacoesModule = GraduacoesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([graduacao_entity_1.Graduacao]),
            logs_module_1.LogsModule
        ],
        providers: [graduacoes_service_1.GraduacoesService],
        controllers: [graduacoes_controller_1.GraduacoesController],
        exports: [graduacoes_service_1.GraduacoesService]
    })
], GraduacoesModule);
//# sourceMappingURL=graduacoes.module.js.map