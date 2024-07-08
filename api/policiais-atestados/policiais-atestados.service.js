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
exports.PoliciaisAtestadosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const policial_atestado_entity_1 = require("./policial-atestado.entity");
const typeorm_2 = require("typeorm");
const core_1 = require("@nestjs/core");
const date_fns_1 = require("date-fns");
const logs_service_1 = require("../logs/logs.service");
let PoliciaisAtestadosService = class PoliciaisAtestadosService {
    constructor(policialAtestadoRepository, logsService, lazyModuleLoader) {
        this.policialAtestadoRepository = policialAtestadoRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index(params, idUser) {
        return await this.policialAtestadoRepository.find({
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
        return await this.policialAtestadoRepository.findOne({
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
        var object = this.policialAtestadoRepository.create({ ...object, created_by: idUser });
        var save = await this.policialAtestadoRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um Atestado de Policial',
            tipo: 1,
            table: 'policiais_atestados',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.policialAtestadoRepository.findOneBy({ id: id });
        data = { ...object };
        await this.policialAtestadoRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um Atestado de Policial',
            tipo: 2,
            table: 'policiais_atestados',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.policialAtestadoRepository.findOne({ where: {
                id: id,
            } });
        await this.policialAtestadoRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um Atestado de Policial',
            tipo: 3,
            table: 'policiais_atestados',
            fk: data.id,
            user: idUser
        });
    }
    async quantidade(params, idUser) {
        return await this.policialAtestadoRepository.count({ where: {
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
        return await this.policialAtestadoRepository.find({
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
exports.PoliciaisAtestadosService = PoliciaisAtestadosService;
exports.PoliciaisAtestadosService = PoliciaisAtestadosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(policial_atestado_entity_1.PolicialAtestado)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], PoliciaisAtestadosService);
//# sourceMappingURL=policiais-atestados.service.js.map