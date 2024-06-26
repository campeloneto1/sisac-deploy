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
exports.Veiculo = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const cor_entity_1 = require("../cores/cor.entity");
const modelo_entity_1 = require("../modelos/modelo.entity");
const veiculo_tipo_entity_1 = require("../veiculos-tipos/veiculo-tipo.entity");
const veiculo_oficina_entity_1 = require("../veiculos-oficinas/veiculo-oficina.entity");
const veiculo_policial_entity_1 = require("../veiculos-policiais/veiculo-policial.entity");
let Veiculo = class Veiculo {
};
exports.Veiculo = Veiculo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Veiculo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 20,
    }),
    __metadata("design:type", String)
], Veiculo.prototype, "placa", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], Veiculo.prototype, "placa_especial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], Veiculo.prototype, "chassi", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], Veiculo.prototype, "renavam", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], Veiculo.prototype, "ano", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], Veiculo.prototype, "blindado", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], Veiculo.prototype, "organico", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], Veiculo.prototype, "km_inicial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], Veiculo.prototype, "km_atual", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], Veiculo.prototype, "km_troca_oleo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], Veiculo.prototype, "km_revisao", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'date'
    }),
    __metadata("design:type", Date)
], Veiculo.prototype, "data_revisao", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'date'
    }),
    __metadata("design:type", Date)
], Veiculo.prototype, "data_baixa", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'text'
    }),
    __metadata("design:type", String)
], Veiculo.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cor_entity_1.Cor, (cor) => cor.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", cor_entity_1.Cor)
], Veiculo.prototype, "cor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => veiculo_tipo_entity_1.VeiculoTipo, (veiculotipo) => veiculotipo.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", veiculo_tipo_entity_1.VeiculoTipo)
], Veiculo.prototype, "veiculo_tipo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => modelo_entity_1.Modelo, (modelo) => modelo.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", modelo_entity_1.Modelo)
], Veiculo.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], Veiculo.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => veiculo_oficina_entity_1.VeiculoOficina, veiculosoficinas => veiculosoficinas.veiculo),
    __metadata("design:type", Array)
], Veiculo.prototype, "veiculos_oficinas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => veiculo_policial_entity_1.VeiculoPolicial, veiculospolicial => veiculospolicial.veiculo),
    __metadata("design:type", Array)
], Veiculo.prototype, "veiculos_policiais", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Veiculo.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Veiculo.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Veiculo.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Veiculo.prototype, "updated_at", void 0);
exports.Veiculo = Veiculo = __decorate([
    (0, typeorm_1.Entity)('veiculos'),
    (0, typeorm_1.Index)(['placa', 'subunidade'], { unique: true })
], Veiculo);
//# sourceMappingURL=veiculo.entity.js.map