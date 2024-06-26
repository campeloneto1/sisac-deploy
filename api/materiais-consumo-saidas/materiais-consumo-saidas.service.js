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
exports.MateriaisConsumoSaidasService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const logs_service_1 = require("../logs/logs.service");
const materiais_consumo_service_1 = require("../materiais-consumo/materiais-consumo.service");
const typeorm_2 = require("typeorm");
const material_consumo_saida_entity_1 = require("./material-consumo-saida.entity");
const materiais_consumo_saidas_itens_service_1 = require("../materiais-consumo-saidas-itens/materiais-consumo-saidas-itens.service");
const date_fns_1 = require("date-fns");
let MateriaisConsumoSaidasService = class MateriaisConsumoSaidasService {
    constructor(amaterialConsumoSaidaRepository, lazyModuleLoader, materiaisConsumoSaidasItensService, materiaisConsumoService, logsService) {
        this.amaterialConsumoSaidaRepository = amaterialConsumoSaidaRepository;
        this.lazyModuleLoader = lazyModuleLoader;
        this.materiaisConsumoSaidasItensService = materiaisConsumoSaidasItensService;
        this.materiaisConsumoService = materiaisConsumoService;
        this.logsService = logsService;
    }
    async index(params, idUser) {
        return await this.amaterialConsumoSaidaRepository.find({
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
        return await this.amaterialConsumoSaidaRepository.findOne({
            where: {
                id: id,
                subunidade: {
                    id: (0, typeorm_2.In)(idsSubs)
                }
            },
            relations: {
                user: true,
                materiais_consumo_saidas_itens: {
                    material_consumo: {
                        modelo: true
                    },
                    material_consumo_saida: false
                }
            }
        });
    }
    async create(object, idUser) {
        var object2 = this.amaterialConsumoSaidaRepository.create({ ...object, data_saida: new Date(), created_by: idUser });
        let emp = await this.amaterialConsumoSaidaRepository.save(object2);
        object.materiais.forEach(element => {
            this.materiaisConsumoSaidasItensService.create({
                material_consumo_saida: emp.id,
                material_consumo: element.material_consumoId,
                quantidade: element.quantidade
            }, idUser);
        });
        await this.logsService.create({
            object: JSON.stringify(emp),
            mensagem: 'Cadastrou uma saida de material de consumo',
            tipo: 1,
            table: 'materiais_consumo_saidas',
            fk: emp.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.amaterialConsumoSaidaRepository.findOneBy({ id: id });
        data = { ...object };
        await this.amaterialConsumoSaidaRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou uma saida de material de consumo',
            tipo: 2,
            table: 'materiais_consumo_saidas',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var mats = await this.materiaisConsumoSaidasItensService.whereMatCon(id);
        var data = await this.amaterialConsumoSaidaRepository.findOne({ where: {
                id: id,
            } });
        mats.forEach((mat) => {
            this.materiaisConsumoService.atualizarQuantidadeUp(mat.material_consumo.id, mat.quantidade);
        });
        await this.amaterialConsumoSaidaRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu uma saida de material de consumo',
            tipo: 3,
            table: 'materiais_consumo_saidas',
            fk: data.id,
            user: idUser
        });
    }
    async relatorio(object, idUser) {
        var finaldate = new Date(object.data_final);
        finaldate = (0, date_fns_1.addHours)(finaldate, 23);
        finaldate = (0, date_fns_1.addMinutes)(finaldate, 59);
        var materiaisconsumo;
        materiaisconsumo = await this.amaterialConsumoSaidaRepository.find({
            where: {
                data_saida: (0, typeorm_2.Between)(object.data_inicial, finaldate),
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
                materiais_consumo_saidas_itens: {
                    material_consumo: {
                        modelo: true
                    },
                    material_consumo_saida: false
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
                element.materiais_consumo_saidas_itens.forEach(item => {
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
exports.MateriaisConsumoSaidasService = MateriaisConsumoSaidasService;
exports.MateriaisConsumoSaidasService = MateriaisConsumoSaidasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(material_consumo_saida_entity_1.MaterialConsumoSaida)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        core_1.LazyModuleLoader,
        materiais_consumo_saidas_itens_service_1.MateriaisConsumoSaidasItensService,
        materiais_consumo_service_1.MateriaisConsumoService,
        logs_service_1.LogsService])
], MateriaisConsumoSaidasService);
//# sourceMappingURL=materiais-consumo-saidas.service.js.map