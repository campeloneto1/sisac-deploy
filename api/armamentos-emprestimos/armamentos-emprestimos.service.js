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
exports.ArmamentosEmprestimosService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const armamento_emprestimo_entity_1 = require("./armamento-emprestimo.entity");
const armamentos_emprestimos_itens_service_1 = require("../armamentos-emprestimos-itens/armamentos-emprestimos-itens.service");
const armamentos_service_1 = require("../armamentos/armamentos.service");
const date_fns_1 = require("date-fns");
const logs_service_1 = require("../logs/logs.service");
let ArmamentosEmprestimosService = class ArmamentosEmprestimosService {
    constructor(armamentoEmprestimoRepository, lazyModuleLoader, armamentosEmprestimosItensService, armamentoService, logsService) {
        this.armamentoEmprestimoRepository = armamentoEmprestimoRepository;
        this.lazyModuleLoader = lazyModuleLoader;
        this.armamentosEmprestimosItensService = armamentosEmprestimosItensService;
        this.armamentoService = armamentoService;
        this.logsService = logsService;
    }
    async index(params, idUser) {
        return await this.armamentoEmprestimoRepository.find({
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
        return await this.armamentoEmprestimoRepository.findOne({
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
                armamentos_emprestimos_itens: {
                    armamento: {
                        modelo: true
                    },
                    armamento_emprestimo: false
                }
            }
        });
    }
    async create(object, idUser) {
        var object2 = this.armamentoEmprestimoRepository.create({ ...object, data_emprestimo: new Date(), created_by: idUser });
        let emp = await this.armamentoEmprestimoRepository.save(object2);
        object.armamentos.forEach(element => {
            this.armamentosEmprestimosItensService.create({
                armamento_emprestimo: emp.id,
                armamento: element.armamentoId,
                quantidade: element.quantidade
            }, idUser);
        });
        await this.logsService.create({
            object: JSON.stringify(emp),
            mensagem: 'Cadastrou um Emprestimo de Armamento',
            tipo: 1,
            table: 'armamentos_emprestimos',
            fk: emp.id,
            user: idUser
        });
    }
    async update(id, object, idUser) {
        var data = await this.armamentoEmprestimoRepository.findOneBy({ id: id });
        data = { ...object };
        await this.armamentoEmprestimoRepository.update({ id: id }, { ...data, updated_by: idUser });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Editou um Emprestimo de Armamento',
            tipo: 2,
            table: 'armamentos_emprestimos',
            fk: id,
            user: idUser
        });
    }
    async remove(id, idUser) {
        var arms = await this.armamentosEmprestimosItensService.whereArmEmp(id);
        var data = await this.armamentoEmprestimoRepository.findOne({ where: {
                id: id,
            } });
        arms.forEach((arm) => {
            this.armamentoService.atualizarQuantidadeUp(arm.armamento.id, arm.quantidade);
        });
        await this.armamentoEmprestimoRepository.delete(id);
        await this.logsService.create({
            object: JSON.stringify(data),
            mensagem: 'Excluiu um Emprestimo de Armamento',
            tipo: 3,
            table: 'armamentos_emprestimos',
            fk: data.id,
            user: idUser
        });
    }
    async receber(object, idUser) {
        var data = await this.armamentoEmprestimoRepository.findOneBy({ id: object.id });
        data.observacoes = object.observacoes;
        await this.armamentoEmprestimoRepository.update({ id: object.id }, { ...data, data_devolucao: new Date(), updated_by: idUser });
        object.armamentos.forEach(async (element) => {
            var armemp = await this.armamentosEmprestimosItensService.find(element.id);
            if (element.quantidade != armemp.quantidade) {
                await this.armamentoService.atualizarQuantidadeUp(armemp.armamento.id, element.quantidade);
                armemp.quantidade_devolucao = element.quantidade;
                await this.armamentosEmprestimosItensService.update(armemp.id, armemp, idUser);
                var dif = armemp.quantidade - element.quantidade;
                var arma = await this.armamentoService.find2(armemp.armamento.id, idUser);
                arma.quantidade = arma.quantidade - dif;
                await this.armamentoService.update(arma.id, arma, idUser);
            }
            else {
                await this.armamentoService.atualizarQuantidadeUp(armemp.armamento.id, element.quantidade);
                armemp.quantidade_devolucao = element.quantidade;
                await this.armamentosEmprestimosItensService.update(armemp.id, armemp, idUser);
            }
        });
        await this.logsService.create({
            object: JSON.stringify(object),
            object_old: JSON.stringify(data),
            mensagem: 'Recebeu um Emprestimo de Armamento',
            tipo: 2,
            table: 'armamentos_emprestimos',
            fk: object.id,
            user: idUser
        });
    }
    async emprestados(params, idUser) {
        return this.armamentoEmprestimoRepository.find({
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
        var armamentos;
        armamentos = await this.armamentoEmprestimoRepository.find({
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
                armamentos_emprestimos_itens: {
                    armamento: {
                        modelo: true
                    },
                    armamento_emprestimo: false
                }
            }
        });
        if (object.policial) {
            armamentos = armamentos.filter(element => {
                return element.policial.id === object.policial;
            });
        }
        if (object.armamento) {
            armamentos = armamentos.filter(element => {
                let teste = false;
                element.armamentos_emprestimos_itens.forEach(item => {
                    if (object.armamento === item.armamento.id) {
                        teste = true;
                    }
                });
                if (teste) {
                    return element;
                }
            });
        }
        return armamentos;
    }
};
exports.ArmamentosEmprestimosService = ArmamentosEmprestimosService;
exports.ArmamentosEmprestimosService = ArmamentosEmprestimosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(armamento_emprestimo_entity_1.ArmamentoEmprestimo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        core_1.LazyModuleLoader,
        armamentos_emprestimos_itens_service_1.ArmamentosEmprestimosItensService,
        armamentos_service_1.ArmamentosService,
        logs_service_1.LogsService])
], ArmamentosEmprestimosService);
//# sourceMappingURL=armamentos-emprestimos.service.js.map