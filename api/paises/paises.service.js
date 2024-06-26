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
exports.PaisesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pais_entity_1 = require("./pais.entity");
const typeorm_2 = require("typeorm");
const core_1 = require("@nestjs/core");
const logs_service_1 = require("../logs/logs.service");
let PaisesService = class PaisesService {
    constructor(paisRepository, logsService, lazyModuleLoader) {
        this.paisRepository = paisRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index() {
        return await this.paisRepository.find();
    }
    async find(id) {
        return await this.paisRepository.findOne({ where: { id: id } });
    }
    async create(object, idUser) {
        var object = this.paisRepository.create({ ...object, created_by: idUser });
        var save = await this.paisRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um país',
            tipo: 1,
            table: 'paises',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.paisRepository.findOneBy({ id: id });
        data = { ...object };
        await this.paisRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um país',
            tipo: 2,
            table: 'paises',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.paisRepository.findOne({ where: {
                id: id,
            } });
        await this.paisRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um país',
            tipo: 3,
            table: 'paises',
            fk: data.id,
            user: idUser
        });
    }
};
exports.PaisesService = PaisesService;
exports.PaisesService = PaisesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pais_entity_1.Pais)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], PaisesService);
//# sourceMappingURL=paises.service.js.map