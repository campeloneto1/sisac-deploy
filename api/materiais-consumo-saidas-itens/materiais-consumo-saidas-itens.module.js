"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaisConsumoSaidasItensModule = void 0;
const common_1 = require("@nestjs/common");
const materiais_consumo_saidas_itens_service_1 = require("./materiais-consumo-saidas-itens.service");
const materiais_consumo_saidas_itens_controller_1 = require("./materiais-consumo-saidas-itens.controller");
const typeorm_1 = require("@nestjs/typeorm");
const material_consumo_saida_item_entity_1 = require("./material-consumo-saida-item.entity");
const logs_module_1 = require("../logs/logs.module");
const materiais_consumo_module_1 = require("../materiais-consumo/materiais-consumo.module");
let MateriaisConsumoSaidasItensModule = class MateriaisConsumoSaidasItensModule {
};
exports.MateriaisConsumoSaidasItensModule = MateriaisConsumoSaidasItensModule;
exports.MateriaisConsumoSaidasItensModule = MateriaisConsumoSaidasItensModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([material_consumo_saida_item_entity_1.MaterialConsumoSaidaItem]),
            materiais_consumo_module_1.MateriaisConsumoModule,
            logs_module_1.LogsModule
        ],
        providers: [materiais_consumo_saidas_itens_service_1.MateriaisConsumoSaidasItensService],
        controllers: [materiais_consumo_saidas_itens_controller_1.MateriaisConsumoSaidasItensController],
        exports: [materiais_consumo_saidas_itens_service_1.MateriaisConsumoSaidasItensService]
    })
], MateriaisConsumoSaidasItensModule);
//# sourceMappingURL=materiais-consumo-saidas-itens.module.js.map