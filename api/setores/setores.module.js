"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetoresModule = void 0;
const common_1 = require("@nestjs/common");
const setores_service_1 = require("./setores.service");
const setores_controller_1 = require("./setores.controller");
const typeorm_1 = require("@nestjs/typeorm");
const setor_entity_1 = require("./setor.entity");
const logs_module_1 = require("../logs/logs.module");
let SetoresModule = class SetoresModule {
};
exports.SetoresModule = SetoresModule;
exports.SetoresModule = SetoresModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([setor_entity_1.Setor]),
            logs_module_1.LogsModule
        ],
        providers: [setores_service_1.SetoresService],
        controllers: [setores_controller_1.SetoresController],
        exports: [setores_service_1.SetoresService]
    })
], SetoresModule);
//# sourceMappingURL=setores.module.js.map