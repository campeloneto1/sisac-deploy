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
exports.MateriaisConsumoEntradasItensService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const logs_service_1 = require("../logs/logs.service");
const materiais_consumo_service_1 = require("../materiais-consumo/materiais-consumo.service");
const typeorm_2 = require("typeorm");
const material_consumo_entrada_item_entity_1 = require("./material-consumo-entrada-item.entity");
let MateriaisConsumoEntradasItensService = class MateriaisConsumoEntradasItensService {
    constructor(materialConsumoEntradaItemRepository, lazyModuleLoader, logsService, materiaisConsumoService) {
        this.materialConsumoEntradaItemRepository = materialConsumoEntradaItemRepository;
        this.lazyModuleLoader = lazyModuleLoader;
        this.logsService = logsService;
        this.materiaisConsumoService = materiaisConsumoService;
    }
    async index() {
        return await this.materialConsumoEntradaItemRepository.find();
    }
    async find(id) {
        return await this.materialConsumoEntradaItemRepository.findOne({ where: { id: id } });
    }
    async create(objectreq, idUser) {
        var object = this.materialConsumoEntradaItemRepository.create({ ...objectreq, created_by: idUser });
        var save = await this.materialConsumoEntradaItemRepository.save(object);
        this.materiaisConsumoService.atualizarQuantidadeUp(object.material_consumo, object.quantidade);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um item na entrada de material de consumo',
            tipo: 1,
            table: 'materiais_consumo_entradas_itens',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.materialConsumoEntradaItemRepository.findOneBy({ id: id });
        data = { ...object };
        await this.materialConsumoEntradaItemRepository.update({ id: id }, { ...data, updated_by: idUser });
    }
    async remove(id, idUser) {
        var object = await this.materialConsumoEntradaItemRepository.findOne({ where: { id: id } });
        this.materiaisConsumoService.atualizarQuantidadeDown(object.material_consumo.id, object.quantidade);
        await this.materialConsumoEntradaItemRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(object),
            mensagem: 'Excluiu um item na entrada de material de consumo',
            tipo: 3,
            table: 'materiais_consumo_entradas_itens',
            fk: object.id,
            user: idUser
        });
    }
    async whereMatCon(id) {
        return await this.materialConsumoEntradaItemRepository.find({
            where: {
                material_consumo_entrada: {
                    id: id
                }
            }
        });
    }
};
exports.MateriaisConsumoEntradasItensService = MateriaisConsumoEntradasItensService;
exports.MateriaisConsumoEntradasItensService = MateriaisConsumoEntradasItensService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(material_consumo_entrada_item_entity_1.MaterialConsumoEntradaItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        core_1.LazyModuleLoader,
        logs_service_1.LogsService,
        materiais_consumo_service_1.MateriaisConsumoService])
], MateriaisConsumoEntradasItensService);
//# sourceMappingURL=materiais-consumo-entradas-itens.service.js.map