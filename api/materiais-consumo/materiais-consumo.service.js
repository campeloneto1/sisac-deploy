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
exports.MateriaisConsumoService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const logs_service_1 = require("../logs/logs.service");
const typeorm_2 = require("typeorm");
const material_consumo_entity_1 = require("./material-consumo.entity");
const date_fns_1 = require("date-fns");
let MateriaisConsumoService = class MateriaisConsumoService {
    constructor(materialConsumoRepository, logsService, lazyModuleLoader) {
        this.materialConsumoRepository = materialConsumoRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index(params, idUser) {
        return await this.materialConsumoRepository.find({
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
        return await this.materialConsumoRepository.findOne({
            relations: {
                materiais_consumo_entradas_itens: {
                    material_consumo_entrada: {
                        user: true
                    }
                },
                materiais_consumo_saidas_itens: {
                    material_consumo_saida: {
                        user: true
                    }
                },
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
        return await this.materialConsumoRepository.findOne({ where: {
                id: id,
                subunidade: {
                    id: (0, typeorm_2.In)(idsSubs)
                }
            } });
    }
    async create(object, idUser) {
        var object = this.materialConsumoRepository.create({ ...object, created_by: idUser });
        var save = await this.materialConsumoRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um material de consumo',
            tipo: 1,
            table: 'materiais_consumo',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.materialConsumoRepository.findOneBy({ id: id });
        data = { ...object };
        await this.materialConsumoRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um material de consumo',
            tipo: 2,
            table: 'materiais_consumo',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.materialConsumoRepository.findOne({ where: {
                id: id,
            } });
        await this.materialConsumoRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um material de consumo',
            tipo: 3,
            table: 'materiais_consumo',
            fk: data.id,
            user: idUser
        });
    }
    async disponiveis(params, idUser) {
        return await this.materialConsumoRepository.find({ where: {
                data_baixa: (0, typeorm_2.IsNull)(),
                quantidade: (0, typeorm_2.MoreThan)(0),
                subunidade: {
                    id: params.subunidade
                }
            } });
    }
    async atualizarQuantidadeUp(id, quantidade) {
        var data = await this.materialConsumoRepository.findOneBy({ id: id });
        data.quantidade = Number(data.quantidade) + Number(quantidade);
        await this.materialConsumoRepository.update({ id: id }, { ...data });
    }
    async atualizarQuantidadeDown(id, quantidade) {
        var data = await this.materialConsumoRepository.findOneBy({ id: id });
        data.quantidade = data.quantidade - quantidade;
        await this.materialConsumoRepository.update({ id: id }, { ...data });
    }
    async vencendo(params, idUser) {
        let result = new Date();
        var proxsemana = result.setDate(result.getDate() + 30);
        return await this.materialConsumoRepository.find({ where: {
                subunidade: {
                    id: params.subunidade
                },
                data_baixa: (0, typeorm_2.IsNull)(),
                data_validade: (0, typeorm_2.LessThanOrEqual)((0, date_fns_1.format)(proxsemana, 'yyyy-MM-dd'))
            } });
    }
    async alerta(params, idUser) {
        return await this.materialConsumoRepository.findBy({
            subunidade: {
                id: params.subunidade
            },
            data_baixa: (0, typeorm_2.IsNull)(),
            quantidade: (0, typeorm_2.Raw)((alias) => `${alias} <= quantidade_alerta`)
        });
    }
    async relatorio(object, idUser) {
        var materiais;
        materiais = await this.materialConsumoRepository.find({
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
            materiais = materiais.filter(element => {
                return element.modelo.marca.id === object.marca;
            });
        }
        if (object.modelo) {
            materiais = materiais.filter(element => {
                return element.modelo.id === object.modelo;
            });
        }
        if (object.material_consumo_tipo) {
            materiais = materiais.filter(element => {
                return element.material_consumo_tipo.id === object.material_consumo_tipo;
            });
        }
        if (object.data_baixa) {
            materiais = materiais.filter(element => {
                return element.data_baixa !== null;
            });
        }
        return materiais;
    }
};
exports.MateriaisConsumoService = MateriaisConsumoService;
exports.MateriaisConsumoService = MateriaisConsumoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(material_consumo_entity_1.MaterialConsumo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], MateriaisConsumoService);
//# sourceMappingURL=materiais-consumo.service.js.map