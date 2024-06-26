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
exports.GraduacoesService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const graduacao_entity_1 = require("./graduacao.entity");
const logs_service_1 = require("../logs/logs.service");
let GraduacoesService = class GraduacoesService {
    constructor(graduacaoRepository, logsService, lazyModuleLoader) {
        this.graduacaoRepository = graduacaoRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index() {
        return await this.graduacaoRepository.find();
    }
    async find(id) {
        return await this.graduacaoRepository.findOne({ where: { id: id } });
    }
    async create(object, idUser) {
        var object = this.graduacaoRepository.create({ ...object, created_by: idUser });
        var save = await this.graduacaoRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou uma graduação',
            tipo: 1,
            table: 'graduacoes',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.graduacaoRepository.findOneBy({ id: id });
        data = { ...object };
        await this.graduacaoRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou uma graduação',
            tipo: 2,
            table: 'graduacoes',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.graduacaoRepository.findOne({ where: {
                id: id,
            } });
        await this.graduacaoRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu uma graduação',
            tipo: 3,
            table: 'graduacoes',
            fk: data.id,
            user: idUser
        });
    }
    async policiaisGraduacoes(params, idUser) {
        return await this.graduacaoRepository
            .query(`
            SELECT graduacoes.nome, count(policiais.id) as quantidade
            FROM graduacoes
            LEFT JOIN policiais ON graduacoes.id = policiais.graduacaoId
            LEFT JOIN setores ON setores.id = policiais.setorId
            WHERE policiais.boletim_transferencia IS NULL
            AND setores.subunidadeId = ${params.subunidade}
            GROUP BY graduacoes.nome
            ORDER BY graduacoes.id DESC
          `);
    }
};
exports.GraduacoesService = GraduacoesService;
exports.GraduacoesService = GraduacoesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(graduacao_entity_1.Graduacao)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], GraduacoesService);
//# sourceMappingURL=graduacoes.service.js.map