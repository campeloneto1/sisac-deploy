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
exports.Empresa = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const cidade_entity_1 = require("../cidades/cidade.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const contrato_entity_1 = require("../contratos/contrato.entity");
const servico_entity_1 = require("../servicos/servico.entity");
let Empresa = class Empresa {
};
exports.Empresa = Empresa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Empresa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], Empresa.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], Empresa.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Empresa.prototype, "nome_fantasia", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 15,
    }),
    __metadata("design:type", String)
], Empresa.prototype, "cnpj", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Empresa.prototype, "gerente", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 11,
    }),
    __metadata("design:type", String)
], Empresa.prototype, "telefone1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 11,
    }),
    __metadata("design:type", String)
], Empresa.prototype, "telefone2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Empresa.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Empresa.prototype, "rua", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], Empresa.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Empresa.prototype, "bairro", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 8,
    }),
    __metadata("design:type", String)
], Empresa.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cidade_entity_1.Cidade, (cidade) => cidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", cidade_entity_1.Cidade)
], Empresa.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => contrato_entity_1.Contrato, contrato => contrato.empresa),
    __metadata("design:type", Array)
], Empresa.prototype, "contratos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => servico_entity_1.Servico, servico => servico.empresa),
    __metadata("design:type", Array)
], Empresa.prototype, "servicos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Empresa.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Empresa.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Empresa.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Empresa.prototype, "updated_at", void 0);
exports.Empresa = Empresa = __decorate([
    (0, typeorm_1.Entity)('empresas'),
    (0, typeorm_1.Index)(['subunidade', 'cnpj'], { unique: true })
], Empresa);
//# sourceMappingURL=empresa.entity.js.map