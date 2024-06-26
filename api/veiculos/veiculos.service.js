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
exports.VeiculosService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const veiculo_entity_1 = require("./veiculo.entity");
const veiculos_oficinas_service_1 = require("../veiculos-oficinas/veiculos-oficinas.service");
const veiculos_policiais_service_1 = require("../veiculos-policiais/veiculos-policiais.service");
const logs_service_1 = require("../logs/logs.service");
const date_fns_1 = require("date-fns");
let VeiculosService = class VeiculosService {
    constructor(veiculoRepository, logsService, veiculosOficinasService, veiculosPoliciaisService, lazyModuleLoader) {
        this.veiculoRepository = veiculoRepository;
        this.logsService = logsService;
        this.veiculosOficinasService = veiculosOficinasService;
        this.veiculosPoliciaisService = veiculosPoliciaisService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index(params, idUser) {
        return await this.veiculoRepository.find({
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
        return await this.veiculoRepository.findOne({
            relations: {
                veiculos_oficinas: {
                    veiculo: false
                },
                veiculos_policiais: {
                    policial: {
                        graduacao: true
                    },
                    veiculo: false
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
        return await this.veiculoRepository.findOne({
            where: {
                id: id,
                subunidade: {
                    id: (0, typeorm_2.In)(idsSubs)
                }
            }
        });
    }
    async create(object, idUser) {
        var object = this.veiculoRepository.create({ ...object, km_atual: object.km_inicial, created_by: idUser });
        var save = await this.veiculoRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um Veiculo',
            tipo: 1,
            table: 'veiculos',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.veiculoRepository.findOneBy({ id: id });
        data = { ...object };
        await this.veiculoRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um Veiculo',
            tipo: 2,
            table: 'veiculos',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.veiculoRepository.findOne({ where: {
                id: id,
            } });
        await this.veiculoRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um Veiculo',
            tipo: 3,
            table: 'veiculos',
            fk: data.id,
            user: idUser
        });
    }
    async disponiveis(params, idUser) {
        var naoficina = await this.veiculosOficinasService.emmanutencao(params, idUser);
        var emprestados = await this.veiculosPoliciaisService.emprestados(params, idUser);
        var ids = [];
        naoficina.forEach(element => {
            ids.push(element.veiculo.id);
        });
        emprestados.forEach(element => {
            ids.push(element.veiculo.id);
        });
        return await this.veiculoRepository.find({
            where: {
                id: (0, typeorm_2.Not)((0, typeorm_2.In)(ids)),
                data_baixa: (0, typeorm_2.IsNull)(),
                subunidade: {
                    id: params.subunidade
                }
            }
        });
    }
    async trocaoleo(params, idUser) {
        return await this.veiculoRepository.find({
            where: {
                km_troca_oleo: (0, typeorm_2.Not)((0, typeorm_2.IsNull)()),
                km_atual: (0, typeorm_2.Raw)((alias) => `${alias} >= km_troca_oleo - 100`),
                data_baixa: (0, typeorm_2.IsNull)(),
                subunidade: {
                    id: params.subunidade
                }
            }
        });
    }
    async revisao(params, idUser) {
        let result = new Date();
        var proxsemana = result.setDate(result.getDate() + 30);
        return await this.veiculoRepository.find({
            where: [
                {
                    km_revisao: (0, typeorm_2.Not)((0, typeorm_2.IsNull)()),
                    km_atual: (0, typeorm_2.Raw)((alias) => `${alias} >= km_revisao - 100`),
                    data_baixa: (0, typeorm_2.IsNull)(),
                    subunidade: {
                        id: params.subunidade
                    }
                },
                {
                    data_revisao: (0, typeorm_2.LessThanOrEqual)((0, date_fns_1.format)(proxsemana, 'yyyy-MM-dd')),
                    data_baixa: (0, typeorm_2.IsNull)(),
                    subunidade: {
                        id: params.subunidade
                    }
                }
            ]
        });
    }
    async relatorio(object, idUser) {
        var veiculos;
        veiculos = await this.veiculoRepository.find({
            where: {
                data_baixa: (0, typeorm_2.IsNull)(),
                subunidade: {
                    id: object.subunidade
                }
            },
            order: {
                placa: 'ASC'
            }
        });
        if (object.marca) {
            veiculos = veiculos.filter(element => {
                return element.modelo.marca.id === object.marca;
            });
        }
        if (object.modelo) {
            veiculos = veiculos.filter(element => {
                return element.modelo.id === object.modelo;
            });
        }
        if (object.veiculo_tipo) {
            veiculos = veiculos.filter(element => {
                return element.veiculo_tipo.id === object.veiculo_tipo;
            });
        }
        if (object.blindado) {
            veiculos = veiculos.filter(element => {
                return element.blindado === true;
            });
        }
        if (object.organico) {
            veiculos = veiculos.filter(element => {
                return element.organico === true;
            });
        }
        if (object.locado) {
            veiculos = veiculos.filter(element => {
                return element.organico !== true;
            });
        }
        if (object.data_baixa) {
            veiculos = veiculos.filter(element => {
                return element.data_baixa !== null;
            });
        }
        return veiculos;
    }
};
exports.VeiculosService = VeiculosService;
exports.VeiculosService = VeiculosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(veiculo_entity_1.Veiculo)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => veiculos_oficinas_service_1.VeiculosOficinasService))),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => veiculos_policiais_service_1.VeiculosPoliciaisService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        veiculos_oficinas_service_1.VeiculosOficinasService,
        veiculos_policiais_service_1.VeiculosPoliciaisService,
        core_1.LazyModuleLoader])
], VeiculosService);
//# sourceMappingURL=veiculos.service.js.map