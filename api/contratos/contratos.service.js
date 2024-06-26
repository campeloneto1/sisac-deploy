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
exports.ContratosService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const logs_service_1 = require("../logs/logs.service");
const typeorm_2 = require("typeorm");
const contrato_entity_1 = require("./contrato.entity");
const date_fns_1 = require("date-fns");
let ContratosService = class ContratosService {
    constructor(contratoRepository, logsService, lazyModuleLoader) {
        this.contratoRepository = contratoRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index(params, idUser) {
        return await this.contratoRepository.find({
            relations: {
                gestor: {
                    graduacao: true
                },
                fiscal: {
                    graduacao: true
                }
            },
            where: {
                subunidade: {
                    id: params.subunidade
                }
            }
        });
    }
    async find(id, idUser) {
        var idsSubs = [];
        idUser.users_subunidades.forEach((data) => {
            idsSubs.push(data.subunidade.id);
        });
        return await this.contratoRepository.findOne({
            relations: {
                contratos_lancamentos: true,
                gestor: {
                    graduacao: true
                },
                fiscal: {
                    graduacao: true
                }
            },
            where: {
                id: id,
                subunidade: {
                    id: (0, typeorm_2.In)(idsSubs)
                }
            }
        });
    }
    async create(object, idUser) {
        var object = this.contratoRepository.create({ ...object, created_by: idUser });
        var save = await this.contratoRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um contrato',
            tipo: 1,
            table: 'contratos',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.contratoRepository.findOneBy({ id: id });
        data = { ...object };
        await this.contratoRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um contrato',
            tipo: 2,
            table: 'contratos',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.contratoRepository.findOne({ where: {
                id: id,
            } });
        await this.contratoRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um contrato',
            tipo: 3,
            table: 'contratos',
            fk: data.id,
            user: idUser
        });
    }
    async valorUsadoUp(contrato, valor, idUser) {
        var data = await this.contratoRepository.findOneBy({ id: contrato });
        data.valor_usado = Number(data.valor_usado) + Number(valor);
        await this.contratoRepository.update({ id: data.id }, { ...data });
    }
    async valorUsadoDown(contrato, valor, idUser) {
        var data = await this.contratoRepository.findOneBy({ id: contrato });
        data.valor_usado = Number(data.valor_usado) - Number(valor);
        await this.contratoRepository.update({ id: data.id }, { ...data });
    }
    async acabando(params, idUser) {
        let result = new Date();
        var proxsemana = result.setDate(result.getDate() + 90);
        return await this.contratoRepository.find({
            where: [
                {
                    valor_usado: (0, typeorm_2.Raw)((alias) => `(${alias} * 100)/valor_global >= 70`),
                    subunidade: {
                        id: params.subunidade
                    }
                },
                {
                    data_final: (0, typeorm_2.LessThanOrEqual)((0, date_fns_1.format)(proxsemana, 'yyyy-MM-dd')),
                    subunidade: {
                        id: params.subunidade
                    }
                }
            ]
        });
    }
    async aditivar(id, object, idUser) {
        var data = await this.contratoRepository.findOneBy({ id: id });
        data.porcentagem_aditivado = object.porcentagem_aditivado;
        data.valor_global = Number(data.valor_global) + (Number(data.valor_global) * (Number(object.porcentagem_aditivado) / 100));
        if (data.quantidade_diarias) {
            data.quantidade_diarias = Number(data.quantidade_diarias) + (Number(data.quantidade_diarias) * (Number(object.porcentagem_aditivado) / 100));
        }
        if (object.observacoes_aditivado) {
            data.observacoes_aditivado = object.observacoes_aditivado;
        }
        await this.contratoRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Aditivou um contrato',
            tipo: 2,
            table: 'contratos',
            fk: id,
            user: idUser
        });
    }
};
exports.ContratosService = ContratosService;
exports.ContratosService = ContratosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contrato_entity_1.Contrato)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], ContratosService);
//# sourceMappingURL=contratos.service.js.map