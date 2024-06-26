"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSubunidadesModule = void 0;
const common_1 = require("@nestjs/common");
const users_subunidades_service_1 = require("./users-subunidades.service");
const users_subunidades_controller_1 = require("./users-subunidades.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_subunidade_entity_1 = require("./user-subunidade.entity");
const logs_module_1 = require("../logs/logs.module");
let UsersSubunidadesModule = class UsersSubunidadesModule {
};
exports.UsersSubunidadesModule = UsersSubunidadesModule;
exports.UsersSubunidadesModule = UsersSubunidadesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_subunidade_entity_1.UserSubunidade]),
            logs_module_1.LogsModule
        ],
        providers: [users_subunidades_service_1.UsersSubunidadesService],
        controllers: [users_subunidades_controller_1.UsersSubunidadesController],
        exports: [users_subunidades_service_1.UsersSubunidadesService]
    })
], UsersSubunidadesModule);
//# sourceMappingURL=users-subunidades.module.js.map