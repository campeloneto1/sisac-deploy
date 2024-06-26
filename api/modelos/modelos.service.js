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
exports.ModelosService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const modelo_entity_1 = require("./modelo.entity");
const logs_service_1 = require("../logs/logs.service");
let ModelosService = class ModelosService {
    constructor(modeloRepository, logsService, lazyModuleLoader) {
        this.modeloRepository = modeloRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index() {
        return await this.modeloRepository.find();
    }
    async find(id) {
        return await this.modeloRepository.findOne({ where: { id: id } });
    }
    async create(object, idUser) {
        var object = this.modeloRepository.create({ ...object, created_by: idUser });
        var save = await this.modeloRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um modelo',
            tipo: 1,
            table: 'modelos',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.modeloRepository.findOneBy({ id: id });
        data = { ...object };
        await this.modeloRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um modelo',
            tipo: 2,
            table: 'modelos',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.modeloRepository.findOne({ where: {
                id: id,
            } });
        await this.modeloRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um modelo',
            tipo: 3,
            table: 'modelos',
            fk: data.id,
            user: idUser
        });
    }
    async whereMarca(id) {
        return await this.modeloRepository.find({
            where: {
                marca: {
                    id: id,
                },
            },
        });
    }
};
exports.ModelosService = ModelosService;
exports.ModelosService = ModelosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(modelo_entity_1.Modelo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], ModelosService);
//# sourceMappingURL=modelos.service.js.map