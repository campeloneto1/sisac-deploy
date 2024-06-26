"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliciaisAtestadosModule = void 0;
const common_1 = require("@nestjs/common");
const policiais_atestados_controller_1 = require("./policiais-atestados.controller");
const policiais_atestados_service_1 = require("./policiais-atestados.service");
const typeorm_1 = require("@nestjs/typeorm");
const policial_atestado_entity_1 = require("./policial-atestado.entity");
const logs_module_1 = require("../logs/logs.module");
let PoliciaisAtestadosModule = class PoliciaisAtestadosModule {
};
exports.PoliciaisAtestadosModule = PoliciaisAtestadosModule;
exports.PoliciaisAtestadosModule = PoliciaisAtestadosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([policial_atestado_entity_1.PolicialAtestado]),
            logs_module_1.LogsModule
        ],
        controllers: [policiais_atestados_controller_1.PoliciaisAtestadosController],
        providers: [policiais_atestados_service_1.PoliciaisAtestadosService],
        exports: [policiais_atestados_service_1.PoliciaisAtestadosService]
    })
], PoliciaisAtestadosModule);
//# sourceMappingURL=policiais-atestados.module.js.map