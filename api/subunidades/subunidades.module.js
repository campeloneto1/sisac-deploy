"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubunidadesModule = void 0;
const common_1 = require("@nestjs/common");
const subunidades_service_1 = require("./subunidades.service");
const subunidades_controller_1 = require("./subunidades.controller");
const typeorm_1 = require("@nestjs/typeorm");
const subunidade_entity_1 = require("./subunidade.entity");
const logs_module_1 = require("../logs/logs.module");
let SubunidadesModule = class SubunidadesModule {
};
exports.SubunidadesModule = SubunidadesModule;
exports.SubunidadesModule = SubunidadesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([subunidade_entity_1.Subunidade]),
            logs_module_1.LogsModule
        ],
        providers: [subunidades_service_1.SubunidadesService],
        controllers: [subunidades_controller_1.SubunidadesController],
        exports: [subunidades_service_1.SubunidadesService]
    })
], SubunidadesModule);
//# sourceMappingURL=subunidades.module.js.map