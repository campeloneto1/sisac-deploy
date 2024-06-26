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
exports.MarcasService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const marca_entity_1 = require("./marca.entity");
const logs_service_1 = require("../logs/logs.service");
let MarcasService = class MarcasService {
    constructor(marcaRepository, logsService, lazyModuleLoader) {
        this.marcaRepository = marcaRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index() {
        return await this.marcaRepository.find();
    }
    async find(id) {
        return await this.marcaRepository.findOne({ where: { id: id } });
    }
    async create(object, idUser) {
        var object = this.marcaRepository.create({ ...object, created_by: idUser });
        var save = await this.marcaRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou uma marca',
            tipo: 1,
            table: 'marcas',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.marcaRepository.findOneBy({ id: id });
        data = { ...object };
        await this.marcaRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou uma marca',
            tipo: 2,
            table: 'marcas',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.marcaRepository.findOne({ where: {
                id: id,
            } });
        await this.marcaRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu uma marca',
            tipo: 3,
            table: 'marcas',
            fk: data.id,
            user: idUser
        });
    }
    async marcasArmamentos() {
        return await this.marcaRepository.find({ where: { armamento: true } });
    }
    async marcasLogistica() {
        return await this.marcaRepository.find({ where: { logistica: true } });
    }
    async marcasTransporte() {
        return await this.marcaRepository.find({ where: { transporte: true } });
    }
};
exports.MarcasService = MarcasService;
exports.MarcasService = MarcasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(marca_entity_1.Marca)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], MarcasService);
//# sourceMappingURL=marcas.service.js.map