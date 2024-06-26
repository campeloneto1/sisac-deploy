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
exports.Policial = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const cidade_entity_1 = require("../cidades/cidade.entity");
const sexo_entity_1 = require("../sexos/sexo.entity");
const graduacao_entity_1 = require("../graduacoes/graduacao.entity");
const setor_entity_1 = require("../setores/setor.entity");
const policial_publicacao_entity_1 = require("../policiais-publicacoes/policial-publicacao.entity");
const policial_ferias_entity_1 = require("../policiais-ferias/policial-ferias.entity");
const policial_atestado_entity_1 = require("../policiais-atestados/policial-atestado.entity");
const armamento_emprestimo_entity_1 = require("../armamentos-emprestimos/armamento-emprestimo.entity");
const unidade_entity_1 = require("../unidades/unidade.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const veiculo_policial_entity_1 = require("../veiculos-policiais/veiculo-policial.entity");
const policial_curso_entity_1 = require("../policiais-cursos/policial-curso.entity");
const material_policial_entity_1 = require("../materiais-policiais/material-policial.entity");
const policial_requerida_entity_1 = require("../policiais-requeridas/policial-requerida.entity");
const escolaridade_entity_1 = require("../escolaridades/escolaridade.entity");
let Policial = class Policial {
};
exports.Policial = Policial;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Policial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 10,
        unique: true
    }),
    __metadata("design:type", String)
], Policial.prototype, "numeral", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], Policial.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 50,
    }),
    __metadata("design:type", String)
], Policial.prototype, "nome_guerra", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 8,
        unique: true
    }),
    __metadata("design:type", String)
], Policial.prototype, "matricula", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 11,
        unique: true
    }),
    __metadata("design:type", String)
], Policial.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Policial.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 11,
    }),
    __metadata("design:type", String)
], Policial.prototype, "telefone1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 11,
    }),
    __metadata("design:type", String)
], Policial.prototype, "telefone2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'date'
    }),
    __metadata("design:type", Date)
], Policial.prototype, "data_nascimento", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Policial.prototype, "rua", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], Policial.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Policial.prototype, "bairro", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 8,
    }),
    __metadata("design:type", String)
], Policial.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'date'
    }),
    __metadata("design:type", Date)
], Policial.prototype, "data_inclusao", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'date'
    }),
    __metadata("design:type", Date)
], Policial.prototype, "data_apresentacao", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], Policial.prototype, "boletim_inclusao", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], Policial.prototype, "boletim_apresentacao", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], Policial.prototype, "boletim_transferencia", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Policial.prototype, "foto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cidade_entity_1.Cidade, (cidade) => cidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", cidade_entity_1.Cidade)
], Policial.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sexo_entity_1.Sexo, (sexo) => sexo.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", sexo_entity_1.Sexo)
], Policial.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => graduacao_entity_1.Graduacao, (graduacao) => graduacao.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", graduacao_entity_1.Graduacao)
], Policial.prototype, "graduacao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => setor_entity_1.Setor, (setor) => setor.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", setor_entity_1.Setor)
], Policial.prototype, "setor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => escolaridade_entity_1.Escolaridade, (escolaridade) => escolaridade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", escolaridade_entity_1.Escolaridade)
], Policial.prototype, "escolaridade", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.policial),
    __metadata("design:type", user_entity_1.User)
], Policial.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => policial_publicacao_entity_1.PolicialPublicacao, policialpublicacao => policialpublicacao.policial),
    __metadata("design:type", Array)
], Policial.prototype, "policiais_publicacoes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => policial_ferias_entity_1.PolicialFerias, policialferias => policialferias.policial),
    __metadata("design:type", Array)
], Policial.prototype, "policiais_ferias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => policial_atestado_entity_1.PolicialAtestado, policialatestado => policialatestado.policial),
    __metadata("design:type", Array)
], Policial.prototype, "policiais_atestados", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => policial_curso_entity_1.PolicialCurso, policialcurso => policialcurso.policial),
    __metadata("design:type", Array)
], Policial.prototype, "policiais_cursos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => policial_requerida_entity_1.PolicialRequerida, policialrequerida => policialrequerida.policial),
    __metadata("design:type", Array)
], Policial.prototype, "policiais_requeridas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => armamento_emprestimo_entity_1.ArmamentoEmprestimo, armamentoemprestimo => armamentoemprestimo.policial),
    __metadata("design:type", Array)
], Policial.prototype, "armamentos_emprestimos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => material_policial_entity_1.MaterialPolicial, materiaispoliciais => materiaispoliciais.policial),
    __metadata("design:type", Array)
], Policial.prototype, "materiais_policiais", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => unidade_entity_1.Unidade, unidade => unidade.comandante),
    __metadata("design:type", Array)
], Policial.prototype, "comandantes_unidades", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => unidade_entity_1.Unidade, unidade => unidade.subcomandante),
    __metadata("design:type", Array)
], Policial.prototype, "subcomandantes_unidades", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => subunidade_entity_1.Subunidade, subunidade => subunidade.comandante),
    __metadata("design:type", Array)
], Policial.prototype, "comandantes_subunidades", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => subunidade_entity_1.Subunidade, subunidade => subunidade.subcomandante),
    __metadata("design:type", Array)
], Policial.prototype, "subcomandantes_subunidades", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => veiculo_policial_entity_1.VeiculoPolicial, veiculospolicial => veiculospolicial.policial),
    __metadata("design:type", Array)
], Policial.prototype, "veiculos_policiais", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Policial.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Policial.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Policial.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Policial.prototype, "updated_at", void 0);
exports.Policial = Policial = __decorate([
    (0, typeorm_1.Entity)('policiais')
], Policial);
//# sourceMappingURL=policial.entity.js.map