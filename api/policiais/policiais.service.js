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
exports.PoliciaisService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const policial_entity_1 = require("./policial.entity");
const users_service_1 = require("../users/users.service");
const utilities_service_1 = require("../utilities/utilities.service");
const logs_service_1 = require("../logs/logs.service");
const users_subunidades_service_1 = require("../users-subunidades/users-subunidades.service");
let PoliciaisService = class PoliciaisService {
    constructor(policialRepository, lazyModuleLoader, usersService, usersSubunidadesService, utilitiesService, logsService) {
        this.policialRepository = policialRepository;
        this.lazyModuleLoader = lazyModuleLoader;
        this.usersService = usersService;
        this.usersSubunidadesService = usersSubunidadesService;
        this.utilitiesService = utilitiesService;
        this.logsService = logsService;
    }
    async index(params, idUser) {
        return await this.policialRepository.find({
            where: {
                setor: {
                    subunidade: {
                        id: params.subunidade
                    }
                }
            },
            relations: {
                user: {
                    policial: false,
                    perfil: false
                },
            }
        });
    }
    async find(id, idUser) {
        var idsSubs = [];
        idUser.users_subunidades.forEach((data) => {
            idsSubs.push(data.subunidade.id);
        });
        return await this.policialRepository.findOne({
            where: {
                id: id,
                setor: {
                    subunidade: {
                        id: (0, typeorm_2.In)(idsSubs)
                    }
                }
            },
            relations: {
                policiais_publicacoes: { policial: false },
                policiais_cursos: { policial: false },
                policiais_ferias: { policial: false },
                policiais_atestados: { policial: false },
                armamentos_emprestimos: {
                    policial: false,
                    armamentos_emprestimos_itens: {
                        armamento: {
                            modelo: true
                        }
                    }
                },
                materiais_policiais: {
                    policial: false,
                    materiais_policiais_itens: {
                        material: {
                            modelo: true
                        }
                    }
                },
                veiculos_policiais: {
                    policial: false,
                    veiculo: {
                        modelo: {
                            marca: true
                        }
                    }
                }
            },
        });
    }
    async find2(id, idUser) {
        var idsSubs = [];
        idUser.users_subunidades.forEach((data) => {
            idsSubs.push(data.subunidade.id);
        });
        return await this.policialRepository.findOne({
            where: {
                id: id,
                setor: {
                    subunidade: {
                        id: (0, typeorm_2.In)(idsSubs)
                    }
                }
            },
        });
    }
    async create(object, idUser) {
        var object = this.policialRepository.create({
            ...object,
            created_by: idUser,
        });
        var policial = await this.policialRepository.save(object);
        await this.logsService.create({
            object: JSON.stringify(policial),
            mensagem: 'Cadastrou um Policial',
            tipo: 1,
            table: 'policiais',
            fk: policial.id,
            user: idUser
        });
        var salt = await this.utilitiesService.generateSalt(10);
        var password = await this.utilitiesService.hashString(`${object.cpf}${salt}`);
        var save = await this.policialRepository.findOne({ relations: {
                setor: true,
            }, where: { id: policial.id } });
        var user = {
            nome: object.nome,
            cpf: object.cpf,
            password: password,
            salt: salt,
            subunidade: save.setor.subunidade.id,
            policial: policial,
            perfil: 3
        };
        await this.usersService.create(user, idUser);
    }
    async update(id, object, idUser) {
        var data = await this.policialRepository.findOneBy({
            id: id,
        });
        var dataold = data;
        data = { ...object };
        await this.policialRepository.update({ id: id }, { ...data, updated_by: idUser });
        var upuser = false;
        var user = await this.usersService.wherePol(id);
        if (user) {
            if (object.nome && user.nome != object.nome) {
                upuser = true;
                user.nome = object.nome;
            }
            if (object.cpf && user.cpf != object.cpf) {
                upuser = true;
                user.cpf = object.cpf;
            }
            if (object.telefone1 && user.telefone != object.telefone1) {
                upuser = true;
                user.telefone = object.telefone1;
            }
            if (object.email && user.email != object.email) {
                upuser = true;
                user.email = object.email;
            }
            if (upuser) {
                await this.usersService.update(user.id, user, idUser);
            }
        }
        await this.logsService.create({
            object: JSON.stringify(data),
            object_old: JSON.stringify(dataold),
            mensagem: 'Editou um Policial',
            tipo: 2,
            table: 'policiais',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var del = this.policialRepository.findOne({
            where: {
                id: id,
            }
        });
        await this.logsService.create({
            object: JSON.stringify(del),
            mensagem: 'Excluiu um Policial',
            tipo: 3,
            table: 'policiais',
            fk: id,
            user: idUser
        });
        await this.policialRepository.delete(id);
    }
    async disponiveis(params, idUser) {
        return await this.policialRepository.find({
            where: {
                boletim_transferencia: (0, typeorm_2.IsNull)(),
                setor: {
                    subunidade: {
                        id: params.subunidade
                    }
                }
            },
        });
    }
    async quantidade(params, idUser) {
        return await this.policialRepository.count({
            where: {
                boletim_transferencia: (0, typeorm_2.IsNull)(),
                setor: {
                    subunidade: {
                        id: params.subunidade
                    }
                }
            },
        });
    }
    async updateFoto(id, object, idUser) {
        var data = await this.policialRepository.findOneBy({
            id: id,
        });
        var dataold = data;
        data.foto = object.foto;
        await this.policialRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(data),
            object_old: JSON.stringify(dataold),
            mensagem: 'Modificou a foto de Policial',
            tipo: 2,
            table: 'policiais',
            fk: id,
            user: idUser
        });
    }
    async relatorio(object, idUser) {
        var policiais;
        policiais = await this.policialRepository.find({
            where: {
                setor: {
                    subunidade: {
                        id: object.subunidade
                    }
                }
            },
        });
        if (object.setor) {
            policiais = policiais.filter(element => {
                return element.setor.id === object.setor;
            });
        }
        if (object.graduacao) {
            policiais = policiais.filter(element => {
                return element.graduacao.id === object.graduacao;
            });
        }
        if (object.sexo) {
            policiais = policiais.filter(element => {
                if (element.sexo) {
                    return element.sexo.id === object.sexo;
                }
            });
        }
        if (object.transferido) {
            policiais = policiais.filter(element => {
                return element.boletim_transferencia !== null;
            });
        }
        return policiais;
    }
};
exports.PoliciaisService = PoliciaisService;
exports.PoliciaisService = PoliciaisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(policial_entity_1.Policial)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        core_1.LazyModuleLoader,
        users_service_1.UsersService,
        users_subunidades_service_1.UsersSubunidadesService,
        utilities_service_1.UtilitiesService,
        logs_service_1.LogsService])
], PoliciaisService);
//# sourceMappingURL=policiais.service.js.map