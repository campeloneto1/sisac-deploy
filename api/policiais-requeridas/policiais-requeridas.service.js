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
exports.PoliciaisRequeridasService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const logs_service_1 = require("../logs/logs.service");
const typeorm_2 = require("typeorm");
const policial_requerida_entity_1 = require("./policial-requerida.entity");
let PoliciaisRequeridasService = class PoliciaisRequeridasService {
    constructor(policialRequeridaRepository, logsService, lazyModuleLoader) {
        this.policialRequeridaRepository = policialRequeridaRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index(params, idUser) {
        return await this.policialRequeridaRepository.find({
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
        return await this.policialRequeridaRepository.findOne({
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
        var object = this.policialRequeridaRepository.create({ ...object, created_by: idUser });
        var save = await this.policialRequeridaRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou uma Requerida de Policial',
            tipo: 1,
            table: 'policiais_requeridas',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.policialRequeridaRepository.findOneBy({ id: id });
        data = { ...object };
        await this.policialRequeridaRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou uma requerida de Policial',
            tipo: 2,
            table: 'policiais_requeridas',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.policialRequeridaRepository.findOne({ where: {
                id: id,
            } });
        await this.policialRequeridaRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu uma requerida de Policial',
            tipo: 3,
            table: 'policiais_requeridas',
            fk: data.id,
            user: idUser
        });
    }
    async quantidade(params, idUser) {
        return await this.policialRequeridaRepository.count({ where: {
                boletim_publicacao: (0, typeorm_2.IsNull)(),
                policial: {
                    setor: {
                        subunidade: {
                            id: params.subunidade
                        }
                    }
                }
            } });
    }
};
exports.PoliciaisRequeridasService = PoliciaisRequeridasService;
exports.PoliciaisRequeridasService = PoliciaisRequeridasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(policial_requerida_entity_1.PolicialRequerida)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], PoliciaisRequeridasService);
//# sourceMappingURL=policiais-requeridas.service.js.map