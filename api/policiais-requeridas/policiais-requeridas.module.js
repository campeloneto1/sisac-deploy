"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliciaisRequeridasModule = void 0;
const common_1 = require("@nestjs/common");
const policiais_requeridas_service_1 = require("./policiais-requeridas.service");
const policiais_requeridas_controller_1 = require("./policiais-requeridas.controller");
const typeorm_1 = require("@nestjs/typeorm");
const logs_module_1 = require("../logs/logs.module");
const policial_requerida_entity_1 = require("./policial-requerida.entity");
let PoliciaisRequeridasModule = class PoliciaisRequeridasModule {
};
exports.PoliciaisRequeridasModule = PoliciaisRequeridasModule;
exports.PoliciaisRequeridasModule = PoliciaisRequeridasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([policial_requerida_entity_1.PolicialRequerida]),
            logs_module_1.LogsModule
        ],
        providers: [policiais_requeridas_service_1.PoliciaisRequeridasService],
        controllers: [policiais_requeridas_controller_1.PoliciaisRequeridasController],
        exports: [policiais_requeridas_service_1.PoliciaisRequeridasService]
    })
], PoliciaisRequeridasModule);
//# sourceMappingURL=policiais-requeridas.module.js.map