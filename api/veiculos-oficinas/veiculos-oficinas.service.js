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
exports.VeiculosOficinasService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const veiculo_oficina_entity_1 = require("./veiculo-oficina.entity");
const veiculos_service_1 = require("../veiculos/veiculos.service");
const date_fns_1 = require("date-fns");
const logs_service_1 = require("../logs/logs.service");
let VeiculosOficinasService = class VeiculosOficinasService {
    constructor(veiculoOficinaRository, veiculosService, logsService, lazyModuleLoader) {
        this.veiculoOficinaRository = veiculoOficinaRository;
        this.veiculosService = veiculosService;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index(params, idUser) {
        return await this.veiculoOficinaRository.find({
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
        return await this.veiculoOficinaRository.findOne({ where: {
                id: id,
                subunidade: {
                    id: (0, typeorm_2.In)(idsSubs)
                }
            } });
    }
    async create(object, idUser) {
        var veiculo = await this.veiculosService.find2(object.veiculo, idUser);
        var object = this.veiculoOficinaRository.create({
            ...object,
            data_inicial: new Date(),
            km_inicial: veiculo.km_atual,
            created_by: idUser
        });
        var save = await this.veiculoOficinaRository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou uma Manutencao de Veiculo',
            tipo: 1,
            table: 'veiculos_oficinas',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var veiculo = await this.veiculosService.find2(object.veiculo, idUser);
        var data = await this.veiculoOficinaRository.findOneBy({ id: id });
        data = { ...object, km_inicial: veiculo.km_atual, };
        await this.veiculoOficinaRository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou uma Manutencao de Veiculo',
            tipo: 2,
            table: 'veiculos_oficinas',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.veiculoOficinaRository.findOne({ where: {
                id: id,
            } });
        await this.veiculoOficinaRository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu uma Manutencao de Veiculo',
            tipo: 3,
            table: 'veiculos_oficinas',
            fk: data.id,
            user: idUser
        });
    }
    async receber(object, idUser) {
        var data = await this.veiculoOficinaRository.findOneBy({ id: object.id });
        data = { ...data, data_final: new Date(), km_final: object.km_final, observacoes: object.observacoes };
        await this.veiculoOficinaRository.update({ id: object.id }, { ...data, updated_by: idUser });
        var veiculo = await this.veiculosService.find2(data.veiculo.id, idUser);
        veiculo.km_atual = object.km_final;
        await this.veiculosService.update(veiculo.id, veiculo, idUser);
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Recebeu uma Manutencao de Veiculo',
            tipo: 2,
            table: 'veiculos_oficinas',
            fk: object.id,
            user: idUser
        });
    }
    async emmanutencao(params, idUser) {
        return await this.veiculoOficinaRository.find({
            where: {
                data_final: (0, typeorm_2.IsNull)(),
                subunidade: {
                    id: params.subunidade
                }
            }
        });
    }
    async relatorio(object, idUser) {
        var finaldate = new Date(object.data_final);
        finaldate = (0, date_fns_1.addHours)(finaldate, 23);
        finaldate = (0, date_fns_1.addMinutes)(finaldate, 59);
        var veiculos;
        veiculos = await this.veiculoOficinaRository.find({
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
        if (object.oficina) {
            veiculos = veiculos.filter((element) => {
                return element.oficina.id === object.oficina;
            });
        }
        if (object.manutencao_tipo) {
            veiculos = veiculos.filter((element) => {
                return element.manutencao_tipo.id === object.manutencao_tipo;
            });
        }
        return veiculos;
    }
};
exports.VeiculosOficinasService = VeiculosOficinasService;
exports.VeiculosOficinasService = VeiculosOficinasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(veiculo_oficina_entity_1.VeiculoOficina)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => veiculos_service_1.VeiculosService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        veiculos_service_1.VeiculosService,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], VeiculosOficinasService);
//# sourceMappingURL=veiculos-oficinas.service.js.map