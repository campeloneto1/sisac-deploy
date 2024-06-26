"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliciaisCursosModule = void 0;
const common_1 = require("@nestjs/common");
const policiais_cursos_service_1 = require("./policiais-cursos.service");
const policiais_cursos_controller_1 = require("./policiais-cursos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const policial_curso_entity_1 = require("./policial-curso.entity");
const logs_module_1 = require("../logs/logs.module");
let PoliciaisCursosModule = class PoliciaisCursosModule {
};
exports.PoliciaisCursosModule = PoliciaisCursosModule;
exports.PoliciaisCursosModule = PoliciaisCursosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([policial_curso_entity_1.PolicialCurso]),
            logs_module_1.LogsModule
        ],
        providers: [policiais_cursos_service_1.PoliciaisCursosService],
        controllers: [policiais_cursos_controller_1.PoliciaisCursosController],
        exports: [policiais_cursos_service_1.PoliciaisCursosService]
    })
], PoliciaisCursosModule);
//# sourceMappingURL=policiais-cursos.module.js.map