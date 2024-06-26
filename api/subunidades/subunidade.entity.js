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
exports.Subunidade = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const cidade_entity_1 = require("../cidades/cidade.entity");
const unidade_entity_1 = require("../unidades/unidade.entity");
const setor_entity_1 = require("../setores/setor.entity");
const armamento_entity_1 = require("../armamentos/armamento.entity");
const armamento_emprestimo_entity_1 = require("../armamentos-emprestimos/armamento-emprestimo.entity");
const policial_entity_1 = require("../policiais/policial.entity");
let Subunidade = class Subunidade {
};
exports.Subunidade = Subunidade;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Subunidade.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], Subunidade.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 20,
    }),
    __metadata("design:type", String)
], Subunidade.prototype, "abreviatura", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 11,
    }),
    __metadata("design:type", String)
], Subunidade.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
        unique: true
    }),
    __metadata("design:type", String)
], Subunidade.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Subunidade.prototype, "rua", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], Subunidade.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Subunidade.prototype, "bairro", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 8,
    }),
    __metadata("design:type", String)
], Subunidade.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cidade_entity_1.Cidade, (cidade) => cidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", cidade_entity_1.Cidade)
], Subunidade.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => unidade_entity_1.Unidade, (unidade) => unidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", unidade_entity_1.Unidade)
], Subunidade.prototype, "unidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => policial_entity_1.Policial, (policial) => policial.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", policial_entity_1.Policial)
], Subunidade.prototype, "comandante", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => policial_entity_1.Policial, (policial) => policial.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", policial_entity_1.Policial)
], Subunidade.prototype, "subcomandante", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => setor_entity_1.Setor, setor => setor.subunidade),
    __metadata("design:type", Array)
], Subunidade.prototype, "setores", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => armamento_entity_1.Armamento, armamento => armamento.subunidade),
    __metadata("design:type", Array)
], Subunidade.prototype, "armamentos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => armamento_emprestimo_entity_1.ArmamentoEmprestimo, armamentoemprestimo => armamentoemprestimo.subunidade),
    __metadata("design:type", Array)
], Subunidade.prototype, "armamentos_emprestimos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => user_entity_1.User, user => user.subunidade),
    __metadata("design:type", Array)
], Subunidade.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Subunidade.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Subunidade.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Subunidade.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Subunidade.prototype, "updated_at", void 0);
exports.Subunidade = Subunidade = __decorate([
    (0, typeorm_1.Entity)('subunidades'),
    (0, typeorm_1.Index)(['nome', 'unidade'], { unique: true })
], Subunidade);
//# sourceMappingURL=subunidade.entity.js.map