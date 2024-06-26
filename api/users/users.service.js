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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const core_1 = require("@nestjs/core");
const user_entity_1 = require("./user.entity");
const utilities_service_1 = require("../utilities/utilities.service");
const logs_service_1 = require("../logs/logs.service");
const users_subunidades_service_1 = require("../users-subunidades/users-subunidades.service");
let UsersService = class UsersService {
    constructor(usersRepository, utilitiesService, usersSubunidadesService, logsService, lazyModuleLoader) {
        this.usersRepository = usersRepository;
        this.utilitiesService = utilitiesService;
        this.usersSubunidadesService = usersSubunidadesService;
        this.logsService = logsService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async index(params, idUser) {
        if (idUser.perfil.administrador) {
            return await this.usersRepository.find({
                relations: {
                    users_subunidades: {
                        subunidade: {
                            unidade: true
                        }
                    }
                }
            });
        }
        else {
            return await this.usersRepository.find({
                relations: {
                    users_subunidades: {
                        subunidade: {
                            unidade: true
                        }
                    }
                },
                where: {
                    users_subunidades: {
                        subunidade: (0, typeorm_2.In)([params.subunidade])
                    }
                }
            });
        }
    }
    async find(id) {
        return await this.usersRepository.findOne({
            relations: {
                users_subunidades: {
                    subunidade: {
                        unidade: true
                    }
                }
            },
            where: { id: id }
        });
    }
    async wherePol(id) {
        return await this.usersRepository.findOne({
            relations: {
                users_subunidades: {
                    subunidade: {
                        unidade: true
                    }
                }
            },
            where: { policial: {
                    id: id
                } }
        });
    }
    async create(object, idUser) {
        object.salt = await this.utilitiesService.generateSalt(10);
        object.password = await this.utilitiesService.hashString(`${object.cpf}${object.salt}`);
        var object = this.usersRepository.create({ ...object, created_by: idUser });
        var save = await this.usersRepository.save(object);
        this.usersSubunidadesService.create({
            user: save.id,
            subunidade: object.subunidade
        }, idUser);
        await this.logsService.create({
            object: JSON.stringify(save),
            mensagem: 'Cadastrou um usuário',
            tipo: 1,
            table: 'users',
            fk: save.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.usersRepository.findOneBy({ id: id });
        data = { ...object };
        await this.usersRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um usuário',
            tipo: 2,
            table: 'users',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var data = await this.usersRepository.findOne({ where: {
                id: id,
            } });
        await this.usersRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um usuário',
            tipo: 3,
            table: 'users',
            fk: data.id,
            user: idUser
        });
    }
    async signIn(username) {
        const user = await this.usersRepository.findOne({
            where: {
                cpf: username,
            },
            select: {
                id: true,
                nome: true,
                cpf: true,
                password: true,
                salt: true,
            },
            relations: {
                perfil: true,
                users_subunidades: {
                    subunidade: {
                        unidade: true
                    }
                }
            }
        });
        return user;
    }
    async resetPass(object, idUser) {
        var user = await this.usersRepository.findOne({ where: { id: object.id } });
        user.salt = await this.utilitiesService.generateSalt(10);
        user.password = await this.utilitiesService.hashString(`${user.cpf}${user.salt}`);
        var update = await this.usersRepository.update({ id: object.id }, { ...user });
        await this.logsService.create({
            object: JSON.stringify(update),
            object_old: JSON.stringify(user),
            mensagem: 'Resetou a senha de um usuário',
            tipo: 2,
            table: 'users',
            fk: object.id,
            user: idUser
        });
    }
    async changePass(object) {
        var user = await this.usersRepository.findOne({ where: { id: object.id } });
        user.salt = await this.utilitiesService.generateSalt(10);
        user.password = await this.utilitiesService.hashString(`${object.password}${user.salt}`);
        var update = await this.usersRepository.update({ id: object.id }, { ...user });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        utilities_service_1.UtilitiesService,
        users_subunidades_service_1.UsersSubunidadesService,
        logs_service_1.LogsService,
        core_1.LazyModuleLoader])
], UsersService);
//# sourceMappingURL=users.service.js.map