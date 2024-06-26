"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliciaisModule = void 0;
const common_1 = require("@nestjs/common");
const policiais_service_1 = require("./policiais.service");
const policiais_controller_1 = require("./policiais.controller");
const typeorm_1 = require("@nestjs/typeorm");
const policial_entity_1 = require("./policial.entity");
const users_module_1 = require("../users/users.module");
const utilities_module_1 = require("../utilities/utilities.module");
const logs_module_1 = require("../logs/logs.module");
const users_subunidades_module_1 = require("../users-subunidades/users-subunidades.module");
let PoliciaisModule = class PoliciaisModule {
};
exports.PoliciaisModule = PoliciaisModule;
exports.PoliciaisModule = PoliciaisModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([policial_entity_1.Policial]),
            users_module_1.UsersModule,
            users_subunidades_module_1.UsersSubunidadesModule,
            utilities_module_1.UtilitiesModule,
            logs_module_1.LogsModule
        ],
        providers: [policiais_service_1.PoliciaisService],
        controllers: [policiais_controller_1.PoliciaisController],
        exports: [policiais_service_1.PoliciaisService]
    })
], PoliciaisModule);
//# sourceMappingURL=policiais.module.js.map