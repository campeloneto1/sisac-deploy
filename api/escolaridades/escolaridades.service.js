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
exports.EscolaridadesService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const logs_service_1 = require("../logs/logs.service");
const typeorm_2 = require("typeorm");
const escolaridade_entity_1 = require("./escolaridade.entity");
let EscolaridadesService = class EscolaridadesService {
    constructor(escolaridadeRepository, logsService, lazyModuleLoader) {
        this.escolaridadeRepository = escolaridadeRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index() {
        return await this.escolaridadeRepository.find();
    }
    async find(id) {
        return await this.escolaridadeRepository.findOne({ where: { id: id } });
    }
    async create(object, idUser) {
        var object = this.escolaridadeRepository.create({ ...object, created_by: idUser });
        var save = await this.escolaridadeRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou uma escolaridade',
            tipo: 1,
            table: 'escolaridades',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.escolaridadeRepository.findOneBy({ id: id });
        data = { ...object };
        await this.escolaridadeRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou uma escolaridade',
            tipo: 2,
            table: 'escolaridades',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.escolaridadeRepository.findOne({ where: {
                id: id,
            } });
        await this.escolaridadeRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu uma escolaridade',
            tipo: 3,
            table: 'escolaridades',
            fk: data.id,
            user: idUser
        });
    }
    async policiaisEscolaridades(idUser) {
        return await this.escolaridadeRepository
            .query(`
            SELECT escolaridades.nome, count(policiais.id) as quantidade
            FROM escolaridades
            LEFT JOIN policiais ON escolaridades.id = policiais.escolaridadeId
            LEFT JOIN setores ON setores.id = policiais.setorId
            WHERE policiais.boletim_transferencia IS NULL
            AND setores.subunidadeId = ${idUser.subunidade.id}
            GROUP BY escolaridades.nome
            ORDER BY escolaridades.id DESC
          `);
    }
};
exports.EscolaridadesService = EscolaridadesService;
exports.EscolaridadesService = EscolaridadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(escolaridade_entity_1.Escolaridade)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], EscolaridadesService);
//# sourceMappingURL=escolaridades.service.js.map