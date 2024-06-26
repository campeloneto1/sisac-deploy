"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmamentosEmprestimosItensModule = void 0;
const common_1 = require("@nestjs/common");
const armamentos_emprestimos_itens_service_1 = require("./armamentos-emprestimos-itens.service");
const armamentos_emprestimos_itens_controller_1 = require("./armamentos-emprestimos-itens.controller");
const typeorm_1 = require("@nestjs/typeorm");
const armamento_emprestimo_item_entity_1 = require("./armamento-emprestimo-item.entity");
const armamentos_module_1 = require("../armamentos/armamentos.module");
const logs_module_1 = require("../logs/logs.module");
let ArmamentosEmprestimosItensModule = class ArmamentosEmprestimosItensModule {
};
exports.ArmamentosEmprestimosItensModule = ArmamentosEmprestimosItensModule;
exports.ArmamentosEmprestimosItensModule = ArmamentosEmprestimosItensModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([armamento_emprestimo_item_entity_1.ArmamentoEmprestimoItem]),
            armamentos_module_1.ArmamentosModule,
            logs_module_1.LogsModule
        ],
        providers: [armamentos_emprestimos_itens_service_1.ArmamentosEmprestimosItensService],
        controllers: [armamentos_emprestimos_itens_controller_1.ArmamentosEmprestimosItensController],
        exports: [armamentos_emprestimos_itens_service_1.ArmamentosEmprestimosItensService]
    })
], ArmamentosEmprestimosItensModule);
//# sourceMappingURL=armamentos-emprestimos-itens.module.js.map