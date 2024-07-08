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
exports.PoliciaisFeriasService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const policial_ferias_entity_1 = require("./policial-ferias.entity");
const date_fns_1 = require("date-fns");
const logs_service_1 = require("../logs/logs.service");
let PoliciaisFeriasService = class PoliciaisFeriasService {
    constructor(policialFeriasRepository, logsService, lazyModuleLoader) {
        this.policialFeriasRepository = policialFeriasRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index(params, idUser) {
        return await this.policialFeriasRepository.find({
            relations: {
                policial: {
                    graduacao: true,
                    setor: {
                        subunidade: {
                            unidade: true
                        }
                    }
                }
            },
            where: {
                policial: {
                    setor: {
                        subunidade: {
                            id: params.subunidade
                        }
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
        return await this.policialFeriasRepository.findOne({
            relations: {
                policial: {
                    graduacao: true,
                    setor: {
                        subunidade: {
                            unidade: true
                        }
                    }
                }
            },
            where: {
                id: id,
                policial: {
                    setor: {
                        subunidade: {
                            id: (0, typeorm_2.In)(idsSubs)
                        }
                    }
                }
            }
        });
    }
    async create(object, idUser) {
        var object = this.policialFeriasRepository.create({ ...object, created_by: idUser });
        var save = await this.policialFeriasRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou uma Ferias de Policial',
            tipo: 1,
            table: 'policiais_ferias',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.policialFeriasRepository.findOneBy({ id: id });
        data = { ...object };
        await this.policialFeriasRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um Ferias de Policial',
            tipo: 2,
            table: 'policiais_ferias',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.policialFeriasRepository.findOne({ where: {
                id: id,
            } });
        await this.policialFeriasRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu uma Ferias de Policial',
            tipo: 3,
            table: 'policiais_ferias',
            fk: data.id,
            user: idUser
        });
    }
    async quantidade(params, idUser) {
        return await this.policialFeriasRepository.count({ where: {
                data_inicial: (0, typeorm_2.LessThanOrEqual)((0, date_fns_1.format)(new Date(), 'yyyy-MM-dd')),
                data_final: (0, typeorm_2.MoreThanOrEqual)((0, date_fns_1.format)(new Date(), 'yyyy-MM-dd')),
                policial: {
                    setor: {
                        subunidade: {
                            id: params.subunidade
                        }
                    }
                }
            } });
    }
    async wherePolicial(id, idUser) {
        var idsSubs = [];
        idUser.users_subunidades.forEach((data) => {
            idsSubs.push(data.subunidade.id);
        });
        return await this.policialFeriasRepository.find({
            where: {
                policial: {
                    id: id,
                    setor: {
                        subunidade: {
                            id: (0, typeorm_2.In)(idsSubs)
                        }
                    }
                }
            }
        });
    }
};
exports.PoliciaisFeriasService = PoliciaisFeriasService;
exports.PoliciaisFeriasService = PoliciaisFeriasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(policial_ferias_entity_1.PolicialFerias)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], PoliciaisFeriasService);
//# sourceMappingURL=policiais-ferias.service.js.map