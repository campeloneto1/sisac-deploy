"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatrimoniosModule = void 0;
const common_1 = require("@nestjs/common");
const patrimonios_service_1 = require("./patrimonios.service");
const patrimonios_controller_1 = require("./patrimonios.controller");
const typeorm_1 = require("@nestjs/typeorm");
const patrimonio_entity_1 = require("./patrimonio.entity");
const logs_module_1 = require("../logs/logs.module");
let PatrimoniosModule = class PatrimoniosModule {
};
exports.PatrimoniosModule = PatrimoniosModule;
exports.PatrimoniosModule = PatrimoniosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([patrimonio_entity_1.Patrimonio]),
            logs_module_1.LogsModule
        ],
        providers: [patrimonios_service_1.PatrimoniosService],
        controllers: [patrimonios_controller_1.PatrimoniosController],
        exports: [patrimonios_service_1.PatrimoniosService]
    })
], PatrimoniosModule);
//# sourceMappingURL=patrimonios.module.js.map