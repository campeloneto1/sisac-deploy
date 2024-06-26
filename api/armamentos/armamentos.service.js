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
exports.ArmamentosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const core_1 = require("@nestjs/core");
const armamento_entity_1 = require("./armamento.entity");
const date_fns_1 = require("date-fns");
const logs_service_1 = require("../logs/logs.service");
let ArmamentosService = class ArmamentosService {
    constructor(armamentoRepository, logsService, lazyModuleLoader) {
        this.armamentoRepository = armamentoRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index(params, idUser) {
        return await this.armamentoRepository.find({
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
        return await this.armamentoRepository.findOne({
            relations: {
                armamentos_emprestimos_itens: {
                    armamento: false,
                    armamento_emprestimo: {
                        policial: {
                            graduacao: true
                        }
                    }
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
    async find2(id, idUser) {
        var idsSubs = [];
        idUser.users_subunidades.forEach((data) => {
            idsSubs.push(data.subunidade.id);
        });
        return await this.armamentoRepository.findOne({ where: {
                id: id,
                subunidade: {
                    id: (0, typeorm_2.In)(idsSubs)
                }
            } });
    }
    async create(object, idUser) {
        var object = this.armamentoRepository.create({ ...object, quantidade_disponivel: object.quantidade, created_by: idUser });
        var save = await this.armamentoRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um Armamento',
            tipo: 1,
            table: 'armamentos',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.armamentoRepository.findOneBy({ id: id });
        data = { ...object };
        await this.armamentoRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um Armamento',
            tipo: 2,
            table: 'armamentos',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.armamentoRepository.findOne({ where: {
                id: id,
            } });
        await this.armamentoRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um Armamento',
            tipo: 3,
            table: 'armamentos',
            fk: data.id,
            user: idUser
        });
    }
    async disponiveis(params, idUser) {
        return await this.armamentoRepository.find({ where: {
                data_baixa: (0, typeorm_2.IsNull)(),
                quantidade_disponivel: (0, typeorm_2.MoreThan)(0),
                subunidade: {
                    id: params.subunidade
                }
            } });
    }
    async atualizarQuantidadeUp(id, quantidade) {
        var data = await this.armamentoRepository.findOneBy({ id: id });
        data.quantidade_disponivel = data.quantidade_disponivel + quantidade;
        await this.armamentoRepository.update({ id: id }, { ...data });
    }
    async atualizarQuantidadeDown(id, quantidade) {
        var data = await this.armamentoRepository.findOneBy({ id: id });
        data.quantidade_disponivel = data.quantidade_disponivel - quantidade;
        await this.armamentoRepository.update({ id: id }, { ...data });
    }
    async vencendo(params, idUser) {
        let result = new Date();
        var proxsemana = result.setDate(result.getDate() + 30);
        return await this.armamentoRepository.find({ where: {
                subunidade: {
                    id: params.subunidade
                },
                data_baixa: (0, typeorm_2.IsNull)(),
                data_validade: (0, typeorm_2.LessThanOrEqual)((0, date_fns_1.format)(proxsemana, 'yyyy-MM-dd'))
            } });
    }
    async ajustarquant(id, object, idUser) {
        var data = await this.armamentoRepository.findOneBy({ id: id });
        if (object.tipo == 1) {
            data.quantidade = Number(data.quantidade) + Number(object.quantidade);
            data.quantidade_disponivel = Number(data.quantidade_disponivel) + Number(object.quantidade);
        }
        else {
            data.quantidade = Number(data.quantidade) - Number(object.quantidade);
            data.quantidade_disponivel = Number(data.quantidade_disponivel) - Number(object.quantidade);
        }
        await this.armamentoRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Ajustou a quantidade um Armamento',
            tipo: 2,
            table: 'armamentos',
            fk: id,
            user: idUser
        });
    }
    async relatorio(object, idUser) {
        var armas;
        armas = await this.armamentoRepository.find({
            where: {
                subunidade: {
                    id: object.subunidade
                }
            },
            order: {
                serial: "ASC"
            }
        });
        if (object.marca) {
            armas = armas.filter(element => {
                return element.modelo.marca.id === object.marca;
            });
        }
        if (object.modelo) {
            armas = armas.filter(element => {
                return element.modelo.id === object.modelo;
            });
        }
        if (object.armamento_tipo) {
            armas = armas.filter(element => {
                return element.armamento_tipo.id === object.armamento_tipo;
            });
        }
        if (object.armamento_calibre) {
            armas = armas.filter(element => {
                if (element.armamento_calibre) {
                    return element.armamento_calibre.id === object.armamento_calibre;
                }
            });
        }
        if (object.armamento_tamanho) {
            armas = armas.filter(element => {
                if (element.armamento_tamanho) {
                    return element.armamento_tamanho.id === object.armamento_tamanho;
                }
            });
        }
        if (object.data_baixa) {
            armas = armas.filter(element => {
                return element.data_baixa !== null;
            });
        }
        return armas;
    }
};
exports.ArmamentosService = ArmamentosService;
exports.ArmamentosService = ArmamentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(armamento_entity_1.Armamento)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], ArmamentosService);
//# sourceMappingURL=armamentos.service.js.map