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
exports.OficinasService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const oficina_entity_1 = require("./oficina.entity");
const logs_service_1 = require("../logs/logs.service");
let OficinasService = class OficinasService {
    constructor(oficinaRepository, logsService, lazyModuleLoader) {
        this.oficinaRepository = oficinaRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index(params, idUser) {
        return await this.oficinaRepository.find({
            where: {
                subunidade: {
                    id: params.subunidade
                }
            },
        });
    }
    async find(id, idUser) {
        var idsSubs = [];
        idUser.users_subunidades.forEach((data) => {
            idsSubs.push(data.subunidade.id);
        });
        return await this.oficinaRepository.findOne({
            where: {
                id: id,
                subunidade: {
                    id: (0, typeorm_2.In)(idsSubs)
                }
            },
        });
    }
    async create(object, idUser) {
        var object = this.oficinaRepository.create({
            ...object,
            created_by: idUser,
        });
        var save = await this.oficinaRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou uma oficina',
            tipo: 1,
            table: 'oficinas',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.oficinaRepository.findOneBy({
            id: id,
        });
        data = { ...object };
        await this.oficinaRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou uma oficina',
            tipo: 2,
            table: 'oficinas',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.oficinaRepository.findOne({ where: {
                id: id,
            } });
        await this.oficinaRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu uma oficina',
            tipo: 3,
            table: 'oficinas',
            fk: data.id,
            user: idUser
        });
    }
};
exports.OficinasService = OficinasService;
exports.OficinasService = OficinasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(oficina_entity_1.Oficina)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], OficinasService);
//# sourceMappingURL=oficinas.service.js.map