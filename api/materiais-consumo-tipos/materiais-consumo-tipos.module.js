"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaisConsumoTiposModule = void 0;
const common_1 = require("@nestjs/common");
const materiais_consumo_tipos_service_1 = require("./materiais-consumo-tipos.service");
const materiais_consumo_tipos_controller_1 = require("./materiais-consumo-tipos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const material_consumo_tipo_entity_1 = require("./material-consumo-tipo.entity");
const logs_module_1 = require("../logs/logs.module");
let MateriaisConsumoTiposModule = class MateriaisConsumoTiposModule {
};
exports.MateriaisConsumoTiposModule = MateriaisConsumoTiposModule;
exports.MateriaisConsumoTiposModule = MateriaisConsumoTiposModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([material_consumo_tipo_entity_1.MaterialConsumoTipo]),
            logs_module_1.LogsModule
        ],
        providers: [materiais_consumo_tipos_service_1.MateriaisConsumoTiposService],
        controllers: [materiais_consumo_tipos_controller_1.MateriaisConsumoTiposController],
        exports: [materiais_consumo_tipos_service_1.MateriaisConsumoTiposService]
    })
], MateriaisConsumoTiposModule);
//# sourceMappingURL=materiais-consumo-tipos.module.js.map