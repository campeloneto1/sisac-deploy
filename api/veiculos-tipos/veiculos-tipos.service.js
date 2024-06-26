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
exports.VeiculosTiposService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const veiculo_tipo_entity_1 = require("./veiculo-tipo.entity");
const logs_service_1 = require("../logs/logs.service");
let VeiculosTiposService = class VeiculosTiposService {
    constructor(veiculoTipoRepository, logsService, lazyModuleLoader) {
        this.veiculoTipoRepository = veiculoTipoRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index() {
        return await this.veiculoTipoRepository.find();
    }
    async find(id) {
        return await this.veiculoTipoRepository.findOne({ where: { id: id } });
    }
    async create(object, idUser) {
        var object = this.veiculoTipoRepository.create({ ...object, created_by: idUser });
        var save = await this.veiculoTipoRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um tipo de veículo',
            tipo: 1,
            table: 'veiculos_tipos',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.veiculoTipoRepository.findOneBy({ id: id });
        data = { ...object };
        await this.veiculoTipoRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um tipo de veículo',
            tipo: 2,
            table: 'veiculos_tipos',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.veiculoTipoRepository.findOne({ where: {
                id: id,
            } });
        await this.veiculoTipoRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um tipo de veículo',
            tipo: 3,
            table: 'veiculos_tipos',
            fk: data.id,
            user: idUser
        });
    }
};
exports.VeiculosTiposService = VeiculosTiposService;
exports.VeiculosTiposService = VeiculosTiposService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(veiculo_tipo_entity_1.VeiculoTipo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], VeiculosTiposService);
//# sourceMappingURL=veiculos-tipos.service.js.map