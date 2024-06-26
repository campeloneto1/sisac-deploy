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
exports.SubunidadesService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const subunidade_entity_1 = require("./subunidade.entity");
const logs_service_1 = require("../logs/logs.service");
let SubunidadesService = class SubunidadesService {
    constructor(subunidadeRepository, logsService, lazyModuleLoader) {
        this.subunidadeRepository = subunidadeRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index(params, idUser) {
        if (idUser.perfil.administrador) {
            return await this.subunidadeRepository.find({ relations: {
                    comandante: {
                        setor: false,
                    },
                    subcomandante: {
                        setor: false,
                    }
                } });
        }
        else {
            return await this.subunidadeRepository.find({ relations: {
                    comandante: {
                        setor: false,
                    },
                    subcomandante: {
                        setor: false,
                    }
                },
                where: {
                    id: params.subunidade
                }
            });
        }
    }
    async find(id) {
        return await this.subunidadeRepository.findOne({ where: { id: id }, relations: {
                comandante: {
                    setor: false,
                },
                subcomandante: {
                    setor: false,
                }
            } });
    }
    async create(object, idUser) {
        var object = this.subunidadeRepository.create({ ...object, created_by: idUser });
        var save = await this.subunidadeRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou uma subunidade',
            tipo: 1,
            table: 'subunidades',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.subunidadeRepository.findOneBy({ id: id });
        data = { ...object };
        await this.subunidadeRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou uma subunidade',
            tipo: 2,
            table: 'subunidades',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.subunidadeRepository.findOne({ where: {
                id: id,
            } });
        await this.subunidadeRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu uma subunidade',
            tipo: 3,
            table: 'subunidades',
            fk: data.id,
            user: idUser
        });
    }
    async whereUnidade(id, idUser) {
        var idsSubs = [];
        idUser.users_subunidades.forEach((data) => {
            idsSubs.push(data.subunidade.id);
        });
        if (idUser.perfil.administrador) {
            return await this.subunidadeRepository.find({
                where: {
                    unidade: {
                        id: id,
                    },
                },
            });
        }
        else {
            return await this.subunidadeRepository.find({
                where: {
                    unidade: {
                        id: id,
                    },
                    id: (0, typeorm_2.In)(idsSubs)
                },
            });
        }
    }
};
exports.SubunidadesService = SubunidadesService;
exports.SubunidadesService = SubunidadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subunidade_entity_1.Subunidade)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], SubunidadesService);
//# sourceMappingURL=subunidades.service.js.map