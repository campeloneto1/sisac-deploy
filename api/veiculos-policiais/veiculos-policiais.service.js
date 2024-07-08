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
exports.VeiculosPoliciaisService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const veiculos_service_1 = require("../veiculos/veiculos.service");
const typeorm_2 = require("typeorm");
const veiculo_policial_entity_1 = require("./veiculo-policial.entity");
const date_fns_1 = require("date-fns");
const logs_service_1 = require("../logs/logs.service");
let VeiculosPoliciaisService = class VeiculosPoliciaisService {
    constructor(veiculoPolicialRository, veiculosService, logsService, lazyModuleLoader) {
        this.veiculoPolicialRository = veiculoPolicialRository;
        this.veiculosService = veiculosService;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index(params, idUser) {
        return await this.veiculoPolicialRository.find({
            relations: {
                policial: {
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
        return await this.veiculoPolicialRository.findOne({
            relations: {
                policial: {
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
        var veiculo = await this.veiculosService.find2(object.veiculo, idUser);
        var object = this.veiculoPolicialRository.create({
            ...object,
            data_inicial: new Date(),
            km_inicial: veiculo.km_atual,
            subunidade: idUser.subunidade,
            created_by: idUser
        });
        var save = await this.veiculoPolicialRository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um Emprestimo de Veiculo',
            tipo: 1,
            table: 'veiculos_policiais',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var veiculo = await this.veiculosService.find2(object.veiculo, idUser);
        var data = await this.veiculoPolicialRository.findOneBy({ id: id });
        data = { ...object, km_inicial: veiculo.km_atual, };
        await this.veiculoPolicialRository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um Emprestimo de Veiculo',
            tipo: 2,
            table: 'veiculos_policiais',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.veiculoPolicialRository.findOne({ where: {
                id: id,
            } });
        await this.veiculoPolicialRository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um Emprestimo de Veiculo',
            tipo: 3,
            table: 'veiculos_policiais',
            fk: data.id,
            user: idUser
        });
    }
    async receber(object, idUser) {
        var data = await this.veiculoPolicialRository.findOneBy({ id: object.id });
        data = { ...data, data_final: new Date(), km_final: object.km_final, observacoes: object.observacoes };
        await this.veiculoPolicialRository.update({ id: object.id }, { ...data, updated_by: idUser });
        var veiculo = await this.veiculosService.find2(data.veiculo.id, idUser);
        veiculo.km_atual = object.km_final;
        await this.veiculosService.update(veiculo.id, veiculo, idUser);
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Recebeu um Emprestimo de Veiculo',
            tipo: 2,
            table: 'veiculos_policiais',
            fk: object.id,
            user: idUser
        });
    }
    async emprestados(params, idUser) {
        return await this.veiculoPolicialRository.find({
            relations: {
                policial: {
                    graduacao: true
                }
            },
            where: {
                data_final: (0, typeorm_2.IsNull)(),
                subunidade: {
                    id: params.subunidade
                }
            }
        });
    }
    async emprestado(params, idUser) {
        return await this.veiculoPolicialRository.findOne({
            relations: {
                policial: {
                    graduacao: true
                }
            },
            where: {
                data_final: (0, typeorm_2.IsNull)(),
                subunidade: {
                    id: params.subunidade
                },
                policial: {
                    id: idUser.policial.id
                }
            }
        });
    }
    async wherePolicial(id, idUser) {
        var idsSubs = [];
        idUser.users_subunidades.forEach((data) => {
            idsSubs.push(data.subunidade.id);
        });
        return await this.veiculoPolicialRository.find({
            where: {
                policial: {
                    id: id,
                },
                subunidade: {
                    id: (0, typeorm_2.In)(idsSubs)
                }
            }
        });
    }
    async relatorio(object, idUser) {
        var finaldate = new Date(object.data_final);
        finaldate = (0, date_fns_1.addHours)(finaldate, 23);
        finaldate = (0, date_fns_1.addMinutes)(finaldate, 59);
        var veiculos;
        veiculos = await this.veiculoPolicialRository.find({
            relations: {
                policial: {
                    graduacao: true
                }
            },
            where: {
                data_inicial: (0, typeorm_2.Between)(object.data_inicial, finaldate),
                subunidade: {
                    id: object.subunidade
                }
            },
            order: {
                id: "DESC"
            }
        });
        if (object.veiculo) {
            veiculos = veiculos.filter((element) => {
                return element.veiculo.id === object.veiculo;
            });
        }
        if (object.policial) {
            veiculos = veiculos.filter((element) => {
                return element.policial.id === object.policial;
            });
        }
        return veiculos;
    }
};
exports.VeiculosPoliciaisService = VeiculosPoliciaisService;
exports.VeiculosPoliciaisService = VeiculosPoliciaisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(veiculo_policial_entity_1.VeiculoPolicial)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => veiculos_service_1.VeiculosService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        veiculos_service_1.VeiculosService,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], VeiculosPoliciaisService);
//# sourceMappingURL=veiculos-policiais.service.js.map