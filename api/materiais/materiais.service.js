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
exports.MateriaisService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const core_1 = require("@nestjs/core");
const material_entity_1 = require("./material.entity");
const date_fns_1 = require("date-fns");
const logs_service_1 = require("../logs/logs.service");
const typeorm_2 = require("@nestjs/typeorm");
let MateriaisService = class MateriaisService {
    constructor(materialRepository, logsService, lazyModuleLoader) {
        this.materialRepository = materialRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index(params, idUser) {
        return await this.materialRepository.find({
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
        return await this.materialRepository.findOne({
            relations: {
                materiais_policiais_itens: {
                    material: false,
                    material_policial: {
                        policial: {
                            graduacao: true
                        }
                    }
                }
            },
            where: {
                id: id,
                subunidade: {
                    id: (0, typeorm_1.In)(idsSubs)
                }
            }
        });
    }
    async find2(id, idUser) {
        var idsSubs = [];
        idUser.users_subunidades.forEach((data) => {
            idsSubs.push(data.subunidade.id);
        });
        return await this.materialRepository.findOne({ where: {
                id: id,
                subunidade: {
                    id: (0, typeorm_1.In)(idsSubs)
                }
            } });
    }
    async create(object, idUser) {
        var object = this.materialRepository.create({ ...object, quantidade_disponivel: object.quantidade, created_by: idUser });
        var save = await this.materialRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um Material',
            tipo: 1,
            table: 'materiais',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.materialRepository.findOneBy({ id: id });
        data = { ...object };
        await this.materialRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um Material',
            tipo: 2,
            table: 'materiais',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.materialRepository.findOne({ where: {
                id: id,
            } });
        await this.materialRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um material',
            tipo: 3,
            table: 'materiais',
            fk: data.id,
            user: idUser
        });
    }
    async disponiveis(params, idUser) {
        return await this.materialRepository.find({ where: {
                data_baixa: (0, typeorm_1.IsNull)(),
                quantidade_disponivel: (0, typeorm_1.MoreThan)(0),
                subunidade: {
                    id: params.subunidade
                }
            } });
    }
    async atualizarQuantidadeUp(id, quantidade) {
        var data = await this.materialRepository.findOneBy({ id: id });
        data.quantidade_disponivel = data.quantidade_disponivel + quantidade;
        await this.materialRepository.update({ id: id }, { ...data });
    }
    async atualizarQuantidadeDown(id, quantidade) {
        var data = await this.materialRepository.findOneBy({ id: id });
        data.quantidade_disponivel = data.quantidade_disponivel - quantidade;
        await this.materialRepository.update({ id: id }, { ...data });
    }
    async vencendo(params, idUser) {
        let result = new Date();
        var proxsemana = result.setDate(result.getDate() + 30);
        return await this.materialRepository.find({ where: {
                subunidade: {
                    id: params.subunidade
                },
                data_baixa: (0, typeorm_1.IsNull)(),
                data_validade: (0, typeorm_1.LessThanOrEqual)((0, date_fns_1.format)(proxsemana, 'yyyy-MM-dd'))
            } });
    }
    async relatorio(object, idUser) {
        var materiais;
        materiais = await this.materialRepository.find({
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
        if (object.material_tipo) {
            materiais = materiais.filter(element => {
                return element.material_tipo.id === object.material_tipo;
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
exports.MateriaisService = MateriaisService;
exports.MateriaisService = MateriaisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(material_entity_1.Material)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], MateriaisService);
//# sourceMappingURL=materiais.service.js.map