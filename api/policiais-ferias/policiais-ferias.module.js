"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliciaisFeriasModule = void 0;
const common_1 = require("@nestjs/common");
const policiais_ferias_service_1 = require("./policiais-ferias.service");
const policiais_ferias_controller_1 = require("./policiais-ferias.controller");
const typeorm_1 = require("@nestjs/typeorm");
const policial_ferias_entity_1 = require("./policial-ferias.entity");
const logs_module_1 = require("../logs/logs.module");
let PoliciaisFeriasModule = class PoliciaisFeriasModule {
};
exports.PoliciaisFeriasModule = PoliciaisFeriasModule;
exports.PoliciaisFeriasModule = PoliciaisFeriasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([policial_ferias_entity_1.PolicialFerias]),
            logs_module_1.LogsModule
        ],
        providers: [policiais_ferias_service_1.PoliciaisFeriasService],
        controllers: [policiais_ferias_controller_1.PoliciaisFeriasController],
        exports: [policiais_ferias_service_1.PoliciaisFeriasService]
    })
], PoliciaisFeriasModule);
//# sourceMappingURL=policiais-ferias.module.js.map