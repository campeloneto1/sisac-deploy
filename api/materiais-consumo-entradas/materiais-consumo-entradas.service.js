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
exports.MateriaisConsumoEntradasService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const logs_service_1 = require("../logs/logs.service");
const materiais_consumo_service_1 = require("../materiais-consumo/materiais-consumo.service");
const typeorm_2 = require("typeorm");
const material_consumo_entrada_entity_1 = require("./material-consumo-entrada.entity");
const materiais_consumo_entradas_itens_service_1 = require("../materiais-consumo-entradas-itens/materiais-consumo-entradas-itens.service");
const date_fns_1 = require("date-fns");
let MateriaisConsumoEntradasService = class MateriaisConsumoEntradasService {
    constructor(materialConsumoEntradaRepository, lazyModuleLoader, materiaisConsumoEntradasItensService, materiaisConsumoService, logsService) {
        this.materialConsumoEntradaRepository = materialConsumoEntradaRepository;
        this.lazyModuleLoader = lazyModuleLoader;
        this.materiaisConsumoEntradasItensService = materiaisConsumoEntradasItensService;
        this.materiaisConsumoService = materiaisConsumoService;
        this.logsService = logsService;
    }
    async index(params, idUser) {
        return await this.materialConsumoEntradaRepository.find({
            relations: {
                user: {
                    policial: {
                        graduacao: true
                    }
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
        return await this.materialConsumoEntradaRepository.findOne({
            where: {
                id: id,
                subunidade: {
                    id: (0, typeorm_2.In)(idsSubs)
                }
            },
            relations: {
                user: {
                    policial: {
                        graduacao: true
                    }
                },
                materiais_consumo_entradas_itens: {
                    material_consumo: {
                        modelo: true
                    },
                    material_consumo_entrada: false
                }
            }
        });
    }
    async create(object, idUser) {
        var object2 = this.materialConsumoEntradaRepository.create({ ...object, data_entrada: new Date(), user: idUser, created_by: idUser });
        let emp = await this.materialConsumoEntradaRepository.save(object2);
        object.materiais.forEach(element => {
            this.materiaisConsumoEntradasItensService.create({
                material_consumo_entrada: emp.id,
                material_consumo: element.material_consumoId,
                quantidade: element.quantidade
            }, idUser);
        });
        await this.logsService.create({
            object: JSON.stringify(emp),
            mensagem: 'Cadastrou uma entrada de material de consumo',
            tipo: 1,
            table: 'materiais_consumo_entradas',
            fk: emp.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.materialConsumoEntradaRepository.findOneBy({ id: id });
        data = { ...object };
        await this.materialConsumoEntradaRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou uma entrada de material de consumo',
            tipo: 2,
            table: 'materiais_consumo_entradas',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var mats = await this.materiaisConsumoEntradasItensService.whereMatCon(id);
        var data = await this.materialConsumoEntradaRepository.findOne({ where: {
                id: id,
            } });
        mats.forEach((mat) => {
            this.materiaisConsumoService.atualizarQuantidadeDown(mat.material_consumo.id, mat.quantidade);
        });
        await this.materialConsumoEntradaRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu uma entrada de material de consumo',
            tipo: 3,
            table: 'materiais_consumo_entradas',
            fk: data.id,
            user: idUser
        });
    }
    async relatorio(object, idUser) {
        var finaldate = new Date(object.data_final);
        finaldate = (0, date_fns_1.addHours)(finaldate, 23);
        finaldate = (0, date_fns_1.addMinutes)(finaldate, 59);
        var materiaisconsumo;
        materiaisconsumo = await this.materialConsumoEntradaRepository.find({
            where: {
                data_entrada: (0, typeorm_2.Between)(object.data_inicial, finaldate),
                subunidade: {
                    id: object.subunidade
                }
            },
            order: {
                id: "DESC"
            },
            relations: {
                user: {
                    policial: {
                        graduacao: true
                    }
                },
                materiais_consumo_entradas_itens: {
                    material_consumo: {
                        modelo: true
                    },
                    material_consumo_entrada: false
                }
            }
        });
        if (object.user) {
            materiaisconsumo = materiaisconsumo.filter(element => {
                return element.user.id === object.user;
            });
        }
        if (object.material_consumo) {
            materiaisconsumo = materiaisconsumo.filter(element => {
                let teste = false;
                element.materiais_consumo_entradas_itens.forEach(item => {
                    if (object.materiais_consumo === item.materiais_consumo.id) {
                        teste = true;
                    }
                });
                if (teste) {
                    return element;
                }
            });
        }
        return materiaisconsumo;
    }
};
exports.MateriaisConsumoEntradasService = MateriaisConsumoEntradasService;
exports.MateriaisConsumoEntradasService = MateriaisConsumoEntradasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(material_consumo_entrada_entity_1.MaterialConsumoEntrada)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        core_1.LazyModuleLoader,
        materiais_consumo_entradas_itens_service_1.MateriaisConsumoEntradasItensService,
        materiais_consumo_service_1.MateriaisConsumoService,
        logs_service_1.LogsService])
], MateriaisConsumoEntradasService);
//# sourceMappingURL=materiais-consumo-entradas.service.js.map