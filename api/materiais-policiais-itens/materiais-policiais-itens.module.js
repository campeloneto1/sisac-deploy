"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaisPoliciaisItensModule = void 0;
const common_1 = require("@nestjs/common");
const materiais_policiais_itens_service_1 = require("./materiais-policiais-itens.service");
const materiais_policiais_itens_controller_1 = require("./materiais-policiais-itens.controller");
const typeorm_1 = require("@nestjs/typeorm");
const material_policial_item_entity_1 = require("./material-policial-item.entity");
const logs_module_1 = require("../logs/logs.module");
const materiais_module_1 = require("../materiais/materiais.module");
let MateriaisPoliciaisItensModule = class MateriaisPoliciaisItensModule {
};
exports.MateriaisPoliciaisItensModule = MateriaisPoliciaisItensModule;
exports.MateriaisPoliciaisItensModule = MateriaisPoliciaisItensModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([material_policial_item_entity_1.MaterialPolicialItem]),
            materiais_module_1.MateriaisModule,
            logs_module_1.LogsModule
        ],
        providers: [materiais_policiais_itens_service_1.MateriaisPoliciaisItensService],
        controllers: [materiais_policiais_itens_controller_1.MateriaisPoliciaisItensController],
        exports: [materiais_policiais_itens_service_1.MateriaisPoliciaisItensService]
    })
], MateriaisPoliciaisItensModule);
//# sourceMappingURL=materiais-policiais-itens.module.js.map