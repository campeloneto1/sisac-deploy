"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaisConsumoSaidasModule = void 0;
const common_1 = require("@nestjs/common");
const materiais_consumo_saidas_service_1 = require("./materiais-consumo-saidas.service");
const materiais_consumo_saidas_controller_1 = require("./materiais-consumo-saidas.controller");
const typeorm_1 = require("@nestjs/typeorm");
const material_consumo_saida_entity_1 = require("./material-consumo-saida.entity");
const logs_module_1 = require("../logs/logs.module");
const materiais_consumo_module_1 = require("../materiais-consumo/materiais-consumo.module");
const materiais_consumo_saidas_itens_module_1 = require("../materiais-consumo-saidas-itens/materiais-consumo-saidas-itens.module");
let MateriaisConsumoSaidasModule = class MateriaisConsumoSaidasModule {
};
exports.MateriaisConsumoSaidasModule = MateriaisConsumoSaidasModule;
exports.MateriaisConsumoSaidasModule = MateriaisConsumoSaidasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([material_consumo_saida_entity_1.MaterialConsumoSaida]),
            materiais_consumo_module_1.MateriaisConsumoModule,
            materiais_consumo_saidas_itens_module_1.MateriaisConsumoSaidasItensModule,
            logs_module_1.LogsModule
        ],
        providers: [materiais_consumo_saidas_service_1.MateriaisConsumoSaidasService],
        controllers: [materiais_consumo_saidas_controller_1.MateriaisConsumoSaidasController],
        exports: [materiais_consumo_saidas_service_1.MateriaisConsumoSaidasService]
    })
], MateriaisConsumoSaidasModule);
//# sourceMappingURL=materiais-consumo-saidas.module.js.map