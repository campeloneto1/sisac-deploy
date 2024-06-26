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
exports.Contrato = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const empresa_entity_1 = require("../empresas/empresa.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const contrato_tipo_entity_1 = require("../contratos-tipos/contrato-tipo.entity");
const contrato_objeto_entity_1 = require("../contratos-objetos/contrato-objeto.entity");
const policial_entity_1 = require("../policiais/policial.entity");
const contrato_lancamento_entity_1 = require("../contratos-lancamentos/contrato-lancamento.entity");
let Contrato = class Contrato {
};
exports.Contrato = Contrato;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Contrato.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        eager: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], Contrato.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.id, {
        eager: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", empresa_entity_1.Empresa)
], Contrato.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => contrato_tipo_entity_1.ContratoTipo, (contratotipo) => contratotipo.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", contrato_tipo_entity_1.ContratoTipo)
], Contrato.prototype, "contrato_tipo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => contrato_objeto_entity_1.ContratoObjeto, (contratoobjeto) => contratoobjeto.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", contrato_objeto_entity_1.ContratoObjeto)
], Contrato.prototype, "contrato_objeto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => policial_entity_1.Policial, (gestor) => gestor.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", policial_entity_1.Policial)
], Contrato.prototype, "gestor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => policial_entity_1.Policial, (fiscal) => fiscal.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", policial_entity_1.Policial)
], Contrato.prototype, "fiscal", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 50,
        unique: true
    }),
    __metadata("design:type", String)
], Contrato.prototype, "numero_contrato", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 50,
        unique: true
    }),
    __metadata("design:type", String)
], Contrato.prototype, "numero_sacc", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'decimal',
        precision: 10,
        scale: 2
    }),
    __metadata("design:type", Number)
], Contrato.prototype, "valor_global", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'decimal',
        precision: 10,
        scale: 2,
        default: 0
    }),
    __metadata("design:type", Number)
], Contrato.prototype, "valor_usado", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'date'
    }),
    __metadata("design:type", Date)
], Contrato.prototype, "data_inicial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'date'
    }),
    __metadata("design:type", Date)
], Contrato.prototype, "data_final", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], Contrato.prototype, "prorrogavel", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'text'
    }),
    __metadata("design:type", String)
], Contrato.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], Contrato.prototype, "quantidade_diarias", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], Contrato.prototype, "numero_porrogacao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Contrato, (contrato) => contrato.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Contrato)
], Contrato.prototype, "contrato_prorrogado", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], Contrato.prototype, "porcentagem_aditivado", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'text'
    }),
    __metadata("design:type", String)
], Contrato.prototype, "observacoes_aditivado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => contrato_lancamento_entity_1.ContratoLancamento, contratoslancamentos => contratoslancamentos.contrato),
    __metadata("design:type", Array)
], Contrato.prototype, "contratos_lancamentos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Contrato.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Contrato.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Contrato.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Contrato.prototype, "updated_at", void 0);
exports.Contrato = Contrato = __decorate([
    (0, typeorm_1.Entity)('contratos')
], Contrato);
//# sourceMappingURL=contrato.entity.js.map