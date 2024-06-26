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
exports.MateriaisPoliciaisService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const material_policial_entity_1 = require("./material-policial.entity");
const date_fns_1 = require("date-fns");
const logs_service_1 = require("../logs/logs.service");
const materiais_policiais_itens_service_1 = require("../materiais-policiais-itens/materiais-policiais-itens.service");
const materiais_service_1 = require("../materiais/materiais.service");
let MateriaisPoliciaisService = class MateriaisPoliciaisService {
    constructor(materiaisPoliciaisRepository, lazyModuleLoader, materiaisPoliciaisIntensService, materiaisService, logsService) {
        this.materiaisPoliciaisRepository = materiaisPoliciaisRepository;
        this.lazyModuleLoader = lazyModuleLoader;
        this.materiaisPoliciaisIntensService = materiaisPoliciaisIntensService;
        this.materiaisService = materiaisService;
        this.logsService = logsService;
    }
    async index(params, idUser) {
        return await this.materiaisPoliciaisRepository.find({
            relations: {
                policial: {
                    graduacao: true
                }
            },
            where: {
                subunidade: {
                    id: params.subunidade
                }
            }
        });
    }
    async find(id, idUser) {
        var idsSubs = [];
        idUser.users_subunidades.forEach((data) => {
            idsSubs.push(data.subunidade.id);
        });
        return await this.materiaisPoliciaisRepository.findOne({
            where: {
                id: id,
                subunidade: {
                    id: (0, typeorm_2.In)(idsSubs)
                }
            },
            relations: {
                policial: {
                    graduacao: true
                },
                materiais_policiais_itens: {
                    material: {
                        modelo: true
                    },
                    material_policial: false
                }
            }
        });
    }
    async create(object, idUser) {
        var object2 = this.materiaisPoliciaisRepository.create({ ...object, data_emprestimo: new Date(), created_by: idUser });
        let emp = await this.materiaisPoliciaisRepository.save(object2);
        object.materiais.forEach(element => {
            this.materiaisPoliciaisIntensService.create({
                material_policial: emp.id,
                material: element.materialId,
                quantidade: element.quantidade
            }, idUser);
        });
        await this.logsService.create({
            object: JSON.stringify(emp),
            mensagem: 'Cadastrou um emprestimo de material',
            tipo: 1,
            table: 'materiais_policiais',
            fk: emp.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.materiaisPoliciaisRepository.findOneBy({ id: id });
        data = { ...object };
        await this.materiaisPoliciaisRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um emprestimo de material',
            tipo: 2,
            table: 'materiais_policiais',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var mats = await this.materiaisPoliciaisIntensService.whereMatEmp(id);
        var data = await this.materiaisPoliciaisRepository.findOne({ where: {
                id: id,
            } });
        mats.forEach((arm) => {
            this.materiaisService.atualizarQuantidadeUp(arm.material.id, arm.quantidade);
        });
        await this.materiaisPoliciaisRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um emprestimo de material',
            tipo: 3,
            table: 'materiais_policiais',
            fk: data.id,
            user: idUser
        });
    }
    async receber(object, idUser) {
        var data = await this.materiaisPoliciaisRepository.findOneBy({ id: object.id });
        data.observacoes = object.observacoes;
        await this.materiaisPoliciaisRepository.update({ id: object.id }, { ...data, data_devolucao: new Date(), updated_by: idUser });
        object.materiais.forEach(async (element) => {
            var armemp = await this.materiaisPoliciaisIntensService.find(element.id);
            if (element.quantidade != armemp.quantidade) {
                await this.materiaisService.atualizarQuantidadeUp(armemp.material.id, element.quantidade);
                armemp.quantidade_devolucao = element.quantidade;
                await this.materiaisPoliciaisIntensService.update(armemp.id, armemp, idUser);
                var dif = armemp.quantidade - element.quantidade;
                var arma = await this.materiaisService.find2(armemp.material.id, idUser);
                arma.quantidade = arma.quantidade - dif;
                await this.materiaisService.update(arma.id, arma, idUser);
            }
            else {
                await this.materiaisService.atualizarQuantidadeUp(armemp.material.id, element.quantidade);
                armemp.quantidade_devolucao = element.quantidade;
                await this.materiaisPoliciaisIntensService.update(armemp.id, armemp, idUser);
            }
        });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Recebeu um Emprestimo de material',
            tipo: 2,
            table: 'materiais_policiais',
            fk: object.id,
            user: idUser
        });
    }
    async emprestados(params, idUser) {
        return this.materiaisPoliciaisRepository.find({
            where: {
                subunidade: {
                    id: params.subunidade
                },
                cautela: (0, typeorm_2.IsNull)(),
                data_devolucao: (0, typeorm_2.IsNull)()
            },
            relations: {
                policial: {
                    graduacao: true
                }
            }
        });
    }
    async relatorio(object, idUser) {
        var finaldate = new Date(object.data_final);
        finaldate = (0, date_fns_1.addHours)(finaldate, 23);
        finaldate = (0, date_fns_1.addMinutes)(finaldate, 59);
        var materiais;
        materiais = await this.materiaisPoliciaisRepository.find({
            where: {
                data_emprestimo: (0, typeorm_2.Between)(object.data_inicial, finaldate),
                subunidade: {
                    id: object.subunidade
                }
            },
            order: {
                id: "DESC"
            },
            relations: {
                policial: {
                    graduacao: true
                },
                materiais_policiais_itens: {
                    material: {
                        modelo: true
                    },
                    material_policial: false
                }
            }
        });
        if (object.policial) {
            materiais = materiais.filter(element => {
                return element.policial.id === object.policial;
            });
        }
        if (object.material) {
            materiais = materiais.filter(element => {
                let teste = false;
                element.materiais_emprestimos_itens.forEach(item => {
                    if (object.material === item.material.id) {
                        teste = true;
                    }
                });
                if (teste) {
                    return element;
                }
            });
        }
        return materiais;
    }
};
exports.MateriaisPoliciaisService = MateriaisPoliciaisService;
exports.MateriaisPoliciaisService = MateriaisPoliciaisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(material_policial_entity_1.MaterialPolicial)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        core_1.LazyModuleLoader,
        materiais_policiais_itens_service_1.MateriaisPoliciaisItensService,
        materiais_service_1.MateriaisService,
        logs_service_1.LogsService])
], MateriaisPoliciaisService);
//# sourceMappingURL=materiais-policiais.service.js.map