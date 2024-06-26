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
exports.SetoresService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const setor_entity_1 = require("./setor.entity");
const logs_service_1 = require("../logs/logs.service");
let SetoresService = class SetoresService {
    constructor(setorRepository, logsService, lazyModuleLoader) {
        this.setorRepository = setorRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index(params, idUser) {
        if (idUser.perfil.administrador) {
            return await this.setorRepository.find();
        }
        else {
            return await this.setorRepository.find({
                where: {
                    subunidade: {
                        id: params.subunidade
                    }
                }
            });
        }
    }
    async find(id) {
        return await this.setorRepository.findOne({ where: { id: id } });
    }
    async create(object, idUser) {
        var object = this.setorRepository.create({ ...object, created_by: idUser });
        var save = await this.setorRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um setor',
            tipo: 1,
            table: 'setores',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.setorRepository.findOneBy({ id: id });
        data = { ...object };
        await this.setorRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um setor',
            tipo: 2,
            table: 'setores',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.setorRepository.findOne({ where: {
                id: id,
            } });
        await this.setorRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um setor',
            tipo: 3,
            table: 'setores',
            fk: data.id,
            user: idUser
        });
    }
    async whereSubunidade(id) {
        return await this.setorRepository.find({
            where: {
                subunidade: {
                    id: id,
                },
            },
        });
    }
    async policiaisSetor(params, idUser) {
        return await this.setorRepository
            .query(`
            SELECT setores.nome, count(policiais.id) as quantidade
            FROM setores
            LEFT JOIN policiais ON setores.id = policiais.setorId
            WHERE policiais.boletim_transferencia IS NULL
            AND setores.subunidadeId = ${params.subunidade}
            GROUP BY setores.nome
            ORDER BY setores.nome
          `);
    }
};
exports.SetoresService = SetoresService;
exports.SetoresService = SetoresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(setor_entity_1.Setor)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], SetoresService);
//# sourceMappingURL=setores.service.js.map