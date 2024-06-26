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
exports.MateriaisPoliciaisItensService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const material_policial_item_entity_1 = require("./material-policial-item.entity");
const logs_service_1 = require("../logs/logs.service");
const materiais_service_1 = require("../materiais/materiais.service");
let MateriaisPoliciaisItensService = class MateriaisPoliciaisItensService {
    constructor(materialPolicialItemRepository, lazyModuleLoader, logsService, materiaisService) {
        this.materialPolicialItemRepository = materialPolicialItemRepository;
        this.lazyModuleLoader = lazyModuleLoader;
        this.logsService = logsService;
        this.materiaisService = materiaisService;
    }
    async index() {
        return await this.materialPolicialItemRepository.find();
    }
    async find(id) {
        return await this.materialPolicialItemRepository.findOne({ where: { id: id } });
    }
    async create(objectreq, idUser) {
        var object = this.materialPolicialItemRepository.create({ ...objectreq, created_by: idUser });
        var save = await this.materialPolicialItemRepository.save(object);
        this.materiaisService.atualizarQuantidadeDown(object.material, object.quantidade);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um item no emprestimo de material',
            tipo: 1,
            table: 'materiais_policiais_itens',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.materialPolicialItemRepository.findOneBy({ id: id });
        data = { ...object };
        await this.materialPolicialItemRepository.update({ id: id }, { ...data, updated_by: idUser });
    }
    async remove(id, idUser) {
        var object = await this.materialPolicialItemRepository.findOne({ where: { id: id } });
        this.materiaisService.atualizarQuantidadeUp(object.material.id, object.quantidade);
        await this.materialPolicialItemRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(object),
            mensagem: 'Excluiu um item no emprestimo de material',
            tipo: 3,
            table: 'materiais_policiais_itens',
            fk: object.id,
            user: idUser
        });
    }
    async whereMatEmp(id) {
        return await this.materialPolicialItemRepository.find({
            where: {
                material_policial: {
                    id: id
                }
            }
        });
    }
};
exports.MateriaisPoliciaisItensService = MateriaisPoliciaisItensService;
exports.MateriaisPoliciaisItensService = MateriaisPoliciaisItensService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(material_policial_item_entity_1.MaterialPolicialItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        core_1.LazyModuleLoader,
        logs_service_1.LogsService,
        materiais_service_1.MateriaisService])
], MateriaisPoliciaisItensService);
//# sourceMappingURL=materiais-policiais-itens.service.js.map