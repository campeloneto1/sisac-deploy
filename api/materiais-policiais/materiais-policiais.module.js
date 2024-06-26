"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaisPoliciaisModule = void 0;
const common_1 = require("@nestjs/common");
const materiais_policiais_service_1 = require("./materiais-policiais.service");
const materiais_policiais_controller_1 = require("./materiais-policiais.controller");
const typeorm_1 = require("@nestjs/typeorm");
const material_policial_entity_1 = require("./material-policial.entity");
const logs_module_1 = require("../logs/logs.module");
const materiais_module_1 = require("../materiais/materiais.module");
const materiais_policiais_itens_module_1 = require("../materiais-policiais-itens/materiais-policiais-itens.module");
let MateriaisPoliciaisModule = class MateriaisPoliciaisModule {
};
exports.MateriaisPoliciaisModule = MateriaisPoliciaisModule;
exports.MateriaisPoliciaisModule = MateriaisPoliciaisModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([material_policial_entity_1.MaterialPolicial]),
            materiais_module_1.MateriaisModule,
            materiais_policiais_itens_module_1.MateriaisPoliciaisItensModule,
            logs_module_1.LogsModule
        ],
        providers: [materiais_policiais_service_1.MateriaisPoliciaisService],
        controllers: [materiais_policiais_controller_1.MateriaisPoliciaisController],
        exports: [materiais_policiais_service_1.MateriaisPoliciaisService]
    })
], MateriaisPoliciaisModule);
//# sourceMappingURL=materiais-policiais.module.js.map