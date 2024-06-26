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
exports.LogsService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const log_entity_1 = require("./log.entity");
let LogsService = class LogsService {
    constructor(logRepository, lazyModuleLoader) {
        this.logRepository = logRepository;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index() {
        return await this.logRepository.find();
    }
    async find(id) {
        return await this.logRepository.findOne({ where: { id: id } });
    }
    async create(object) {
        var object = this.logRepository.create({ ...object });
        await this.logRepository.save(object);
    }
    async update(id, object) {
        var data = await this.logRepository.findOneBy({ id: id });
        data = { ...object };
        await this.logRepository.update({ id: id }, { ...data });
    }
    async remove(id) {
        return await this.logRepository.delete(id);
        ;
    }
};
exports.LogsService = LogsService;
exports.LogsService = LogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(log_entity_1.Log)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        core_1.LazyModuleLoader])
], LogsService);
//# sourceMappingURL=logs.service.js.map