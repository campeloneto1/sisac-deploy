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
exports.PublicacoesTiposService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const publicacao_tipo_entity_1 = require("./publicacao-tipo.entity");
const logs_service_1 = require("../logs/logs.service");
let PublicacoesTiposService = class PublicacoesTiposService {
    constructor(sexoRepository, logsService, lazyModuleLoader) {
        this.sexoRepository = sexoRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index() {
        return await this.sexoRepository.find();
    }
    async find(id) {
        return await this.sexoRepository.findOne({ where: { id: id } });
    }
    async create(object, idUser) {
        var object = this.sexoRepository.create({ ...object, created_by: idUser });
        var save = await this.sexoRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um tipo de pulbicacao',
            tipo: 1,
            table: 'publicacoes_tipos',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.sexoRepository.findOneBy({ id: id });
        data = { ...object };
        await this.sexoRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um tipo de pulbicacao',
            tipo: 2,
            table: 'publicacoes_tipos',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.sexoRepository.findOne({ where: {
                id: id,
            } });
        await this.sexoRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um tipo de pulbicacao',
            tipo: 3,
            table: 'publicacoes_tipos',
            fk: data.id,
            user: idUser
        });
    }
};
exports.PublicacoesTiposService = PublicacoesTiposService;
exports.PublicacoesTiposService = PublicacoesTiposService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(publicacao_tipo_entity_1.PublicacaoTipo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], PublicacoesTiposService);
//# sourceMappingURL=publicacoes-tipos.service.js.map