"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManutencoesTiposModule = void 0;
const common_1 = require("@nestjs/common");
const manutencoes_tipos_service_1 = require("./manutencoes-tipos.service");
const manutencoes_tipos_controller_1 = require("./manutencoes-tipos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const manutencao_tipo_entity_1 = require("./manutencao-tipo.entity");
const logs_module_1 = require("../logs/logs.module");
let ManutencoesTiposModule = class ManutencoesTiposModule {
};
exports.ManutencoesTiposModule = ManutencoesTiposModule;
exports.ManutencoesTiposModule = ManutencoesTiposModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([manutencao_tipo_entity_1.ManutencaoTipo]),
            logs_module_1.LogsModule
        ],
        providers: [manutencoes_tipos_service_1.ManutencoesTiposService],
        controllers: [manutencoes_tipos_controller_1.ManutencoesTiposController],
        exports: [manutencoes_tipos_service_1.ManutencoesTiposService]
    })
], ManutencoesTiposModule);
//# sourceMappingURL=manutencoes-tipos.module.js.map