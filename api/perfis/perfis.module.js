"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerfisModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const perfis_controller_1 = require("./perfis.controller");
const perfis_service_1 = require("./perfis.service");
const perfil_entity_1 = require("./perfil.entity");
const logs_module_1 = require("../logs/logs.module");
let PerfisModule = class PerfisModule {
};
exports.PerfisModule = PerfisModule;
exports.PerfisModule = PerfisModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([perfil_entity_1.Perfil]),
            logs_module_1.LogsModule
        ],
        controllers: [perfis_controller_1.PerfisController],
        providers: [perfis_service_1.PerfisService],
        exports: [perfis_service_1.PerfisService]
    })
], PerfisModule);
//# sourceMappingURL=perfis.module.js.map