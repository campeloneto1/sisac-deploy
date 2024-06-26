"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaisTiposModule = void 0;
const common_1 = require("@nestjs/common");
const materiais_tipos_service_1 = require("./materiais-tipos.service");
const materiais_tipos_controller_1 = require("./materiais-tipos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const material_tipo_entity_1 = require("./material-tipo.entity");
const logs_module_1 = require("../logs/logs.module");
let MateriaisTiposModule = class MateriaisTiposModule {
};
exports.MateriaisTiposModule = MateriaisTiposModule;
exports.MateriaisTiposModule = MateriaisTiposModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([material_tipo_entity_1.MaterialTipo]),
            logs_module_1.LogsModule
        ],
        providers: [materiais_tipos_service_1.MateriaisTiposService],
        controllers: [materiais_tipos_controller_1.MateriaisTiposController],
        exports: [materiais_tipos_service_1.MateriaisTiposService]
    })
], MateriaisTiposModule);
//# sourceMappingURL=materiais-tipos.module.js.map