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
exports.PatrimoniosService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const patrimonio_entity_1 = require("./patrimonio.entity");
const logs_service_1 = require("../logs/logs.service");
let PatrimoniosService = class PatrimoniosService {
    constructor(patrimonioRepository, logsService, lazyModuleLoader) {
        this.patrimonioRepository = patrimonioRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index(params, idUser) {
        return await this.patrimonioRepository.find({
            where: {
                setor: {
                    subunidade: {
                        id: params.subunidade
                    }
                }
            }
        });
    }
    async find(id, idUser) {
        var idsSubs = [];
        idUser.users_subunidades.forEach((data) => {
            idsSubs.push(data.subunidade.id);
        });
        return await this.patrimonioRepository.findOne({ where: {
                id: id,
                setor: {
                    subunidade: {
                        id: (0, typeorm_2.In)(idsSubs)
                    }
                }
            } });
    }
    async create(object, idUser) {
        var object = this.patrimonioRepository.create({ ...object, created_by: idUser });
        var save = await this.patrimonioRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um Patrimonio',
            tipo: 1,
            table: 'patrimonios',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.patrimonioRepository.findOneBy({ id: id });
        data = { ...object };
        await this.patrimonioRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um Patrimonio',
            tipo: 2,
            table: 'patrimonios',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.patrimonioRepository.findOne({ where: {
                id: id,
            } });
        await this.patrimonioRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um Patrimonio',
            tipo: 3,
            table: 'patrimonios',
            fk: data.id,
            user: idUser
        });
    }
    async disponiveis(params, idUser) {
        return await this.patrimonioRepository.find({ where: {
                data_baixa: (0, typeorm_2.IsNull)(),
                setor: {
                    subunidade: {
                        id: params.subunidade
                    }
                }
            } });
    }
    async relatorio(object, idUser) {
        var patrimonios;
        patrimonios = await this.patrimonioRepository.find({ where: {
                setor: {
                    subunidade: {
                        id: object.subunidade
                    }
                }
            },
            order: {
                tombo: "ASC"
            }
        });
        if (object.data_baixa) {
            patrimonios = patrimonios.filter(element => {
                return element.data_baixa !== null;
            });
        }
        if (object.setor) {
            patrimonios = patrimonios.filter(element => {
                return element.setor.id === object.setor;
            });
        }
        if (object.patrimonio_tipo) {
            patrimonios = patrimonios.filter(element => {
                return element.patrimonio_tipo.id === object.patrimonio_tipo;
            });
        }
        return patrimonios;
    }
};
exports.PatrimoniosService = PatrimoniosService;
exports.PatrimoniosService = PatrimoniosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(patrimonio_entity_1.Patrimonio)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], PatrimoniosService);
//# sourceMappingURL=patrimonios.service.js.map