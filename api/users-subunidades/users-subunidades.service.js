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
exports.UsersSubunidadesService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const logs_service_1 = require("../logs/logs.service");
const typeorm_2 = require("typeorm");
const user_subunidade_entity_1 = require("./user-subunidade.entity");
let UsersSubunidadesService = class UsersSubunidadesService {
    constructor(usersSubunidadesRepository, logsService, lazyModuleLoader) {
        this.usersSubunidadesRepository = usersSubunidadesRepository;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index() {
        return await this.usersSubunidadesRepository.find();
    }
    async find(id) {
        return await this.usersSubunidadesRepository.findOne({ where: { id: id } });
    }
    async create(object, idUser) {
        var object = this.usersSubunidadesRepository.create({ ...object, created_by: idUser });
        var save = await this.usersSubunidadesRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou uma subunidade do usuário',
            tipo: 1,
            table: 'users_subunidades',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.usersSubunidadesRepository.findOneBy({ id: id });
        data = { ...object };
        await this.usersSubunidadesRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou uma subunidade de um usuário',
            tipo: 2,
            table: 'users_subunidades',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.usersSubunidadesRepository.findOne({ where: {
                id: id,
            } });
        await this.usersSubunidadesRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu uma subunidade de um usuário',
            tipo: 3,
            table: 'users_subunidades',
            fk: data.id,
            user: idUser
        });
    }
};
exports.UsersSubunidadesService = UsersSubunidadesService;
exports.UsersSubunidadesService = UsersSubunidadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_subunidade_entity_1.UserSubunidade)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], UsersSubunidadesService);
//# sourceMappingURL=users-subunidades.service.js.map