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
exports.MateriaisConsumoSaidasItensService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const logs_service_1 = require("../logs/logs.service");
const typeorm_2 = require("typeorm");
const material_consumo_saida_item_entity_1 = require("./material-consumo-saida-item.entity");
const materiais_consumo_service_1 = require("../materiais-consumo/materiais-consumo.service");
let MateriaisConsumoSaidasItensService = class MateriaisConsumoSaidasItensService {
    constructor(materialConsumoSaidaItemRepository, lazyModuleLoader, logsService, materiaisConsumoService) {
        this.materialConsumoSaidaItemRepository = materialConsumoSaidaItemRepository;
        this.lazyModuleLoader = lazyModuleLoader;
        this.logsService = logsService;
        this.materiaisConsumoService = materiaisConsumoService;
    }
    async index() {
        return await this.materialConsumoSaidaItemRepository.find();
    }
    async find(id) {
        return await this.materialConsumoSaidaItemRepository.findOne({ where: { id: id } });
    }
    async create(objectreq, idUser) {
        var object = this.materialConsumoSaidaItemRepository.create({ ...objectreq, created_by: idUser });
        var save = await this.materialConsumoSaidaItemRepository.save(object);
        this.materiaisConsumoService.atualizarQuantidadeDown(object.material_consumo, object.quantidade);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um item na saída de material de consumo',
            tipo: 1,
            table: 'materiais_consumo_saidas_itens',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.materialConsumoSaidaItemRepository.findOneBy({ id: id });
        data = { ...object };
        await this.materialConsumoSaidaItemRepository.update({ id: id }, { ...data, updated_by: idUser });
    }
    async remove(id, idUser) {
        var object = await this.materialConsumoSaidaItemRepository.findOne({ where: { id: id } });
        this.materiaisConsumoService.atualizarQuantidadeUp(object.material_consumo.id, object.quantidade);
        await this.materialConsumoSaidaItemRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(object),
            mensagem: 'Excluiu um item na saída de material de consumo',
            tipo: 3,
            table: 'materiais_consumo_saidas_itens',
            fk: object.id,
            user: idUser
        });
    }
    async whereMatCon(id) {
        return await this.materialConsumoSaidaItemRepository.find({
            where: {
                material_consumo_saida: {
                    id: id
                }
            }
        });
    }
};
exports.MateriaisConsumoSaidasItensService = MateriaisConsumoSaidasItensService;
exports.MateriaisConsumoSaidasItensService = MateriaisConsumoSaidasItensService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(material_consumo_saida_item_entity_1.MaterialConsumoSaidaItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        core_1.LazyModuleLoader,
        logs_service_1.LogsService,
        materiais_consumo_service_1.MateriaisConsumoService])
], MateriaisConsumoSaidasItensService);
//# sourceMappingURL=materiais-consumo-saidas-itens.service.js.map