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
exports.UnidadesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const unidade_entity_1 = require("./unidade.entity");
const typeorm_2 = require("typeorm");
const core_1 = require("@nestjs/core");
const logs_service_1 = require("../logs/logs.service");
let UnidadesService = class UnidadesService {
    constructor(unidadeRepository, logsService, lazyModuleLoader) {
        this.unidadeRepository = unidadeRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index() {
        return await this.unidadeRepository.find({
            relations: {
                comandante: {
                    setor: false,
                },
                subcomandante: {
                    setor: false,
                }
            }
        });
    }
    async find(id) {
        return await this.unidadeRepository.findOne({ where: { id: id }, relations: {
                comandante: {
                    setor: false,
                },
                subcomandante: {
                    setor: false,
                }
            } });
    }
    async create(object, idUser) {
        var object = this.unidadeRepository.create({ ...object, created_by: idUser });
        var save = await this.unidadeRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um unidade',
            tipo: 1,
            table: 'unidades',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.unidadeRepository.findOneBy({ id: id });
        data = { ...object };
        await this.unidadeRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou uma unidade',
            tipo: 2,
            table: 'unidades',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.unidadeRepository.findOne({ where: {
                id: id,
            } });
        await this.unidadeRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um unidade',
            tipo: 3,
            table: 'unidades',
            fk: data.id,
            user: idUser
        });
    }
};
exports.UnidadesService = UnidadesService;
exports.UnidadesService = UnidadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(unidade_entity_1.Unidade)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], UnidadesService);
//# sourceMappingURL=unidades.service.js.map