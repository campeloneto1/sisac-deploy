"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmamentosCalibresModule = void 0;
const common_1 = require("@nestjs/common");
const armamentos_calibres_service_1 = require("./armamentos-calibres.service");
const armamentos_calibres_controller_1 = require("./armamentos-calibres.controller");
const typeorm_1 = require("@nestjs/typeorm");
const armamento_calibre_entity_1 = require("./armamento-calibre.entity");
const logs_module_1 = require("../logs/logs.module");
let ArmamentosCalibresModule = class ArmamentosCalibresModule {
};
exports.ArmamentosCalibresModule = ArmamentosCalibresModule;
exports.ArmamentosCalibresModule = ArmamentosCalibresModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([armamento_calibre_entity_1.ArmamentoCalibre]),
            logs_module_1.LogsModule
        ],
        providers: [armamentos_calibres_service_1.ArmamentosCalibresService],
        controllers: [armamentos_calibres_controller_1.ArmamentosCalibresController],
        exports: [armamentos_calibres_service_1.ArmamentosCalibresService]
    })
], ArmamentosCalibresModule);
//# sourceMappingURL=armamentos-calibres.module.js.map