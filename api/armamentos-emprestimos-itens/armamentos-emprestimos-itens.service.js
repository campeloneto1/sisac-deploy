"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmamentosEmprestimosItensService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const armamento_emprestimo_item_entity_1 = require("./armamento-emprestimo-item.entity");
const armamentos_service_1 = require("../armamentos/armamentos.service");
const logs_service_1 = require("../logs/logs.service");
let ArmamentosEmprestimosItensService = class ArmamentosEmprestimosItensService {
    constructor(armamentoEmprestimoItemRepository, lazyModuleLoader, logsService, armamentosService) {
        this.armamentoEmprestimoItemRepository = armamentoEmprestimoItemRepository;
        this.lazyModuleLoader = lazyModuleLoader;
        this.logsService = logsService;
        this.armamentosService = armamentosService;
    }
    async index() {
        return await this.armamentoEmprestimoItemRepository.find();
    }
    async find(id) {
        return await this.armamentoEmprestimoItemRepository.findOne({ where: { id: id } });
    }
    async create(objectreq, idUser) {
        var object = this.armamentoEmprestimoItemRepository.create({ ...objectreq, created_by: idUser });
        var save = await this.armamentoEmprestimoItemRepository.save(object);
        this.armamentosService.atualizarQuantidadeDown(object.armamento, object.quantidade);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um item no emprestimo de armamento',
            tipo: 1,
            table: 'armamentos_emprestimos_itens',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.armamentoEmprestimoItemRepository.findOneBy({ id: id });
        data = { ...object };
        await this.armamentoEmprestimoItemRepository.update({ id: id }, { ...data, updated_by: idUser });
    }
    async remove(id, idUser) {
        var object = await this.armamentoEmprestimoItemRepository.findOne({ where: { id: id } });
        this.armamentosService.atualizarQuantidadeUp(object.armamento.id, object.quantidade);
        await this.armamentoEmprestimoItemRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(object),
            mensagem: 'Excluiu um item no emprestimo de armamento',
            tipo: 3,
            table: 'armamentos_emprestimos_itens',
            fk: object.id,
            user: idUser
        });
    }
    async whereArmEmp(id) {
        return await this.armamentoEmprestimoItemRepository.find({
            where: {
                armamento_emprestimo: {
                    id: id
                }
            }
        });
    }
};
exports.ArmamentosEmprestimosItensService = ArmamentosEmprestimosItensService;
exports.ArmamentosEmprestimosItensService = ArmamentosEmprestimosItensService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(armamento_emprestimo_item_entity_1.ArmamentoEmprestimoItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        core_1.LazyModuleLoader,
        logs_service_1.LogsService,
        armamentos_service_1.ArmamentosService])
], ArmamentosEmprestimosItensService);
//# sourceMappingURL=armamentos-emprestimos-itens.service.js.map