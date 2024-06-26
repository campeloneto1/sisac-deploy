"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OficinasModule = void 0;
const common_1 = require("@nestjs/common");
const oficinas_service_1 = require("./oficinas.service");
const oficinas_controller_1 = require("./oficinas.controller");
const typeorm_1 = require("@nestjs/typeorm");
const oficina_entity_1 = require("./oficina.entity");
const logs_module_1 = require("../logs/logs.module");
let OficinasModule = class OficinasModule {
};
exports.OficinasModule = OficinasModule;
exports.OficinasModule = OficinasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([oficina_entity_1.Oficina]),
            logs_module_1.LogsModule
        ],
        providers: [oficinas_service_1.OficinasService],
        controllers: [oficinas_controller_1.OficinasController],
        exports: [oficinas_service_1.OficinasService]
    })
], OficinasModule);
//# sourceMappingURL=oficinas.module.js.map