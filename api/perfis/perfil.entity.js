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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perfil = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
let Perfil = class Perfil {
};
exports.Perfil = Perfil;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Perfil.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
        unique: true
    }),
    __metadata("design:type", String)
], Perfil.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "administrador", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "gestor", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "relatorios", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "usuarios", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "usuarios_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "usuarios_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "usuarios_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "armamentos", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "armamentos_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "armamentos_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "armamentos_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "armamentos_emprestimos", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "armamentos_emprestimos_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "armamentos_emprestimos_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "armamentos_emprestimos_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "contratos", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "contratos_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "contratos_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "contratos_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "empresas", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "empresas_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "empresas_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "empresas_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "patrimonios", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "patrimonios_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "patrimonios_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "patrimonios_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_policiais", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_policiais_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_policiais_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_policiais_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_consumo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_consumo_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_consumo_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_consumo_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_consumo_saidas", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_consumo_saidas_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_consumo_saidas_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_consumo_saidas_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_consumo_entradas", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_consumo_entradas_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_consumo_entradas_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "materiais_consumo_entradas_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_atestados", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_atestados_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_atestados_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_atestados_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_cursos", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_cursos_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_cursos_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_cursos_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_ferias", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_ferias_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_ferias_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_ferias_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_publicacoes", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_publicacoes_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_publicacoes_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_publicacoes_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_requeridas", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_requeridas_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_requeridas_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "policiais_requeridas_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "servicos", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "servicos_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "servicos_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "servicos_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "veiculos", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "veiculos_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "veiculos_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "veiculos_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "veiculos_oficinas", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "veiculos_oficinas_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "veiculos_oficinas_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "veiculos_oficinas_del", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "veiculos_policiais", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "veiculos_policiais_cad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "veiculos_policiais_edt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Boolean)
], Perfil.prototype, "veiculos_policiais_del", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => user_entity_1.User, user => user.perfil),
    __metadata("design:type", Array)
], Perfil.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Perfil.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Perfil.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Perfil.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Perfil.prototype, "updated_at", void 0);
exports.Perfil = Perfil = __decorate([
    (0, typeorm_1.Entity)('perfis')
], Perfil);
//# sourceMappingURL=perfil.entity.js.map