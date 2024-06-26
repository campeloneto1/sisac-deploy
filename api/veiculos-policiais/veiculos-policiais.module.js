"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculosPoliciaisModule = void 0;
const common_1 = require("@nestjs/common");
const veiculos_policiais_service_1 = require("./veiculos-policiais.service");
const veiculos_policiais_controller_1 = require("./veiculos-policiais.controller");
const typeorm_1 = require("@nestjs/typeorm");
const veiculo_policial_entity_1 = require("./veiculo-policial.entity");
const veiculos_module_1 = require("../veiculos/veiculos.module");
const logs_module_1 = require("../logs/logs.module");
let VeiculosPoliciaisModule = class VeiculosPoliciaisModule {
};
exports.VeiculosPoliciaisModule = VeiculosPoliciaisModule;
exports.VeiculosPoliciaisModule = VeiculosPoliciaisModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([veiculo_policial_entity_1.VeiculoPolicial]),
            (0, common_1.forwardRef)(() => veiculos_module_1.VeiculosModule),
            logs_module_1.LogsModule
        ],
        providers: [veiculos_policiais_service_1.VeiculosPoliciaisService],
        controllers: [veiculos_policiais_controller_1.VeiculosPoliciaisController],
        exports: [veiculos_policiais_service_1.VeiculosPoliciaisService]
    })
], VeiculosPoliciaisModule);
//# sourceMappingURL=veiculos-policiais.module.js.map