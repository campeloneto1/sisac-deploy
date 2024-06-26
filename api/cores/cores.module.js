"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoresModule = void 0;
const common_1 = require("@nestjs/common");
const cores_service_1 = require("./cores.service");
const cores_controller_1 = require("./cores.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cor_entity_1 = require("./cor.entity");
const logs_module_1 = require("../logs/logs.module");
let CoresModule = class CoresModule {
};
exports.CoresModule = CoresModule;
exports.CoresModule = CoresModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([cor_entity_1.Cor]),
            logs_module_1.LogsModule
        ],
        providers: [cores_service_1.CoresService],
        controllers: [cores_controller_1.CoresController],
        exports: [cores_service_1.CoresService]
    })
], CoresModule);
//# sourceMappingURL=cores.module.js.map