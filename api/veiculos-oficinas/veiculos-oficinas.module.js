"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculosOficinasModule = void 0;
const common_1 = require("@nestjs/common");
const veiculos_oficinas_service_1 = require("./veiculos-oficinas.service");
const veiculos_oficinas_controller_1 = require("./veiculos-oficinas.controller");
const typeorm_1 = require("@nestjs/typeorm");
const veiculo_oficina_entity_1 = require("./veiculo-oficina.entity");
const veiculos_module_1 = require("../veiculos/veiculos.module");
const logs_module_1 = require("../logs/logs.module");
let VeiculosOficinasModule = class VeiculosOficinasModule {
};
exports.VeiculosOficinasModule = VeiculosOficinasModule;
exports.VeiculosOficinasModule = VeiculosOficinasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([veiculo_oficina_entity_1.VeiculoOficina]),
            (0, common_1.forwardRef)(() => veiculos_module_1.VeiculosModule),
            logs_module_1.LogsModule
        ],
        providers: [veiculos_oficinas_service_1.VeiculosOficinasService],
        controllers: [veiculos_oficinas_controller_1.VeiculosOficinasController],
        exports: [veiculos_oficinas_service_1.VeiculosOficinasService]
    })
], VeiculosOficinasModule);
//# sourceMappingURL=veiculos-oficinas.module.js.map