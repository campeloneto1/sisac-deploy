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
exports.ContratosLancamentosService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const logs_service_1 = require("../logs/logs.service");
const typeorm_2 = require("typeorm");
const contrato_lancamento_entity_1 = require("./contrato-lancamento.entity");
const contratos_service_1 = require("../contratos/contratos.service");
let ContratosLancamentosService = class ContratosLancamentosService {
    constructor(contratoLancamentoRepository, logsService, constatrosService, lazyModuleLoader) {
        this.contratoLancamentoRepository = contratoLancamentoRepository;
        this.logsService = logsService;
        this.constatrosService = constatrosService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index(idUser) {
        if (idUser.perfil.administrador) {
            return await this.contratoLancamentoRepository.find({
                relations: {
                    contrato: true,
                },
            });
        }
        else {
            return await this.contratoLancamentoRepository.find({
                relations: {
                    contrato: true,
                },
                where: {
                    contrato: {
                        subunidade: {
                            id: idUser.subunidade.id,
                        },
                    },
                },
            });
        }
    }
    async find(id) {
        return await this.contratoLancamentoRepository.findOne({
            relations: {
                contrato: {
                    gestor: {
                        graduacao: true,
                    },
                    fiscal: {
                        graduacao: true,
                    },
                },
            },
            where: { id: id },
        });
    }
    async create(object, idUser) {
        var object2 = this.contratoLancamentoRepository.create({
            ...object,
            created_by: idUser,
        });
        var save = await this.contratoLancamentoRepository.save(object2);
        await this.constatrosService.valorUsadoUp(object.contrato, object.valor, idUser);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um lançamento de contrato',
            tipo: 1,
            table: 'contratos_lancamentos',
            fk: save.id,
            user: idUser,
        });
    }
    async update(id, object, idUser) {
        var data = await this.contratoLancamentoRepository.findOneBy({ id: id });
        data = { ...object };
        await this.contratoLancamentoRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um lançamento de contrato',
            tipo: 2,
            table: 'contratos_lancamentos',
            fk: id,
            user: idUser,
        });
    }
    async remove(id, idUser) {
        var data = await this.contratoLancamentoRepository.findOne({
            relations: {
                contrato: true
            },
            where: {
                id: id,
            },
        });
        await this.contratoLancamentoRepository.delete(id);
        await this.constatrosService.valorUsadoDown(data.contrato.id, data.valor, idUser);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um lançamento de contrato',
            tipo: 3,
            table: 'contratos_lançamentos',
            fk: data.id,
            user: idUser,
        });
    }
};
exports.ContratosLancamentosService = ContratosLancamentosService;
exports.ContratosLancamentosService = ContratosLancamentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contrato_lancamento_entity_1.ContratoLancamento)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        contratos_service_1.ContratosService,
        core_1.LazyModuleLoader])
], ContratosLancamentosService);
//# sourceMappingURL=contratos-lancamentos.service.js.map