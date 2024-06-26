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
exports.ManutencoesTiposService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const manutencao_tipo_entity_1 = require("./manutencao-tipo.entity");
const logs_service_1 = require("../logs/logs.service");
let ManutencoesTiposService = class ManutencoesTiposService {
    constructor(manutencaoTipoRepository, logsService, lazyModuleLoader) {
        this.manutencaoTipoRepository = manutencaoTipoRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index() {
        return await this.manutencaoTipoRepository.find();
    }
    async find(id) {
        return await this.manutencaoTipoRepository.findOne({ where: { id: id } });
    }
    async create(object, idUser) {
        var object = this.manutencaoTipoRepository.create({ ...object, created_by: idUser });
        var save = await this.manutencaoTipoRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um tipo de manutenção',
            tipo: 1,
            table: 'manutencoes_tipos',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.manutencaoTipoRepository.findOneBy({ id: id });
        data = { ...object };
        await this.manutencaoTipoRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um tipo de manutenção',
            tipo: 2,
            table: 'manutencoes_tipos',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.manutencaoTipoRepository.findOne({ where: {
                id: id,
            } });
        await this.manutencaoTipoRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um tipo de manutenção',
            tipo: 3,
            table: 'manutencoes_tipos',
            fk: data.id,
            user: idUser
        });
    }
};
exports.ManutencoesTiposService = ManutencoesTiposService;
exports.ManutencoesTiposService = ManutencoesTiposService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(manutencao_tipo_entity_1.ManutencaoTipo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], ManutencoesTiposService);
//# sourceMappingURL=manutencoes-tipos.service.js.map