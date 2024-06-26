"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscolaridadesModule = void 0;
const common_1 = require("@nestjs/common");
const escolaridades_service_1 = require("./escolaridades.service");
const escolaridades_controller_1 = require("./escolaridades.controller");
const typeorm_1 = require("@nestjs/typeorm");
const logs_module_1 = require("../logs/logs.module");
const escolaridade_entity_1 = require("./escolaridade.entity");
let EscolaridadesModule = class EscolaridadesModule {
};
exports.EscolaridadesModule = EscolaridadesModule;
exports.EscolaridadesModule = EscolaridadesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([escolaridade_entity_1.Escolaridade]),
            logs_module_1.LogsModule
        ],
        providers: [escolaridades_service_1.EscolaridadesService],
        controllers: [escolaridades_controller_1.EscolaridadesController],
        exports: [escolaridades_service_1.EscolaridadesService]
    })
], EscolaridadesModule);
//# sourceMappingURL=escolaridades.module.js.map