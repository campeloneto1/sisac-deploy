"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SexosModule = void 0;
const common_1 = require("@nestjs/common");
const sexos_service_1 = require("./sexos.service");
const sexos_controller_1 = require("./sexos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const sexo_entity_1 = require("./sexo.entity");
const logs_module_1 = require("../logs/logs.module");
let SexosModule = class SexosModule {
};
exports.SexosModule = SexosModule;
exports.SexosModule = SexosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([sexo_entity_1.Sexo]),
            logs_module_1.LogsModule
        ],
        providers: [sexos_service_1.SexosService],
        controllers: [sexos_controller_1.SexosController],
        exports: [sexos_service_1.SexosService]
    })
], SexosModule);
//# sourceMappingURL=sexos.module.js.map