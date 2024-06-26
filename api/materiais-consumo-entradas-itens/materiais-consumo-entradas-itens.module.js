"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaisConsumoEntradasItensModule = void 0;
const common_1 = require("@nestjs/common");
const materiais_consumo_entradas_itens_service_1 = require("./materiais-consumo-entradas-itens.service");
const materiais_consumo_entradas_itens_controller_1 = require("./materiais-consumo-entradas-itens.controller");
const material_consumo_entrada_item_entity_1 = require("./material-consumo-entrada-item.entity");
const logs_module_1 = require("../logs/logs.module");
const typeorm_1 = require("@nestjs/typeorm");
const materiais_consumo_module_1 = require("../materiais-consumo/materiais-consumo.module");
let MateriaisConsumoEntradasItensModule = class MateriaisConsumoEntradasItensModule {
};
exports.MateriaisConsumoEntradasItensModule = MateriaisConsumoEntradasItensModule;
exports.MateriaisConsumoEntradasItensModule = MateriaisConsumoEntradasItensModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([material_consumo_entrada_item_entity_1.MaterialConsumoEntradaItem]),
            materiais_consumo_module_1.MateriaisConsumoModule,
            logs_module_1.LogsModule
        ],
        providers: [materiais_consumo_entradas_itens_service_1.MateriaisConsumoEntradasItensService],
        controllers: [materiais_consumo_entradas_itens_controller_1.MateriaisConsumoEntradasItensController],
        exports: [materiais_consumo_entradas_itens_service_1.MateriaisConsumoEntradasItensService]
    })
], MateriaisConsumoEntradasItensModule);
//# sourceMappingURL=materiais-consumo-entradas-itens.module.js.map