"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculosModule = void 0;
const common_1 = require("@nestjs/common");
const veiculos_service_1 = require("./veiculos.service");
const veiculos_controller_1 = require("./veiculos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const veiculo_entity_1 = require("./veiculo.entity");
const veiculos_oficinas_module_1 = require("../veiculos-oficinas/veiculos-oficinas.module");
const veiculos_policiais_module_1 = require("../veiculos-policiais/veiculos-policiais.module");
const logs_module_1 = require("../logs/logs.module");
let VeiculosModule = class VeiculosModule {
};
exports.VeiculosModule = VeiculosModule;
exports.VeiculosModule = VeiculosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([veiculo_entity_1.Veiculo]),
            logs_module_1.LogsModule,
            (0, common_1.forwardRef)(() => veiculos_policiais_module_1.VeiculosPoliciaisModule),
            (0, common_1.forwardRef)(() => veiculos_oficinas_module_1.VeiculosOficinasModule),
        ],
        providers: [veiculos_service_1.VeiculosService],
        controllers: [veiculos_controller_1.VeiculosController],
        exports: [veiculos_service_1.VeiculosService]
    })
], VeiculosModule);
//# sourceMappingURL=veiculos.module.js.map