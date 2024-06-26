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
exports.CidadesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cidade_entity_1 = require("./cidade.entity");
const typeorm_2 = require("typeorm");
const core_1 = require("@nestjs/core");
const logs_service_1 = require("../logs/logs.service");
let CidadesService = class CidadesService {
    constructor(cidadeRepository, logsService, lazyModuleLoader) {
        this.cidadeRepository = cidadeRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index() {
        return await this.cidadeRepository.find();
    }
    async find(id) {
        return await this.cidadeRepository.findOne({ where: { id: id } });
    }
    async create(object, idUser) {
        var object = this.cidadeRepository.create({ ...object, created_by: idUser });
        var save = await this.cidadeRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou uma cidade',
            tipo: 1,
            table: 'cidades',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.cidadeRepository.findOneBy({ id: id });
        data = { ...object };
        await this.cidadeRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou uma cidade',
            tipo: 2,
            table: 'cidades',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.cidadeRepository.findOne({ where: {
                id: id,
            } });
        await this.cidadeRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu uma cidade',
            tipo: 3,
            table: 'cidades',
            fk: data.id,
            user: idUser
        });
    }
    async whereEstado(id) {
        return await this.cidadeRepository.find({
            where: {
                estado: {
                    id: id,
                },
            },
        });
    }
};
exports.CidadesService = CidadesService;
exports.CidadesService = CidadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cidade_entity_1.Cidade)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], CidadesService);
//# sourceMappingURL=cidades.service.js.map