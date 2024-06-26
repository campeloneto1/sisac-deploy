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
exports.VeiculoOficina = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const veiculo_entity_1 = require("../veiculos/veiculo.entity");
const oficina_entity_1 = require("../oficinas/oficina.entity");
const manutencao_tipo_entity_1 = require("../manutencoes-tipos/manutencao-tipo.entity");
let VeiculoOficina = class VeiculoOficina {
};
exports.VeiculoOficina = VeiculoOficina;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VeiculoOficina.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => veiculo_entity_1.Veiculo, (veiculo) => veiculo.id, {
        eager: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", veiculo_entity_1.Veiculo)
], VeiculoOficina.prototype, "veiculo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => oficina_entity_1.Oficina, (oficina) => oficina.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", oficina_entity_1.Oficina)
], VeiculoOficina.prototype, "oficina", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => manutencao_tipo_entity_1.ManutencaoTipo, (manutencaotipo) => manutencaotipo.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", manutencao_tipo_entity_1.ManutencaoTipo)
], VeiculoOficina.prototype, "manutencao_tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Date)
], VeiculoOficina.prototype, "data_inicial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Date)
], VeiculoOficina.prototype, "data_final", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], VeiculoOficina.prototype, "km_inicial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], VeiculoOficina.prototype, "km_final", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'text'
    }),
    __metadata("design:type", String)
], VeiculoOficina.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], VeiculoOficina.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], VeiculoOficina.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], VeiculoOficina.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VeiculoOficina.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], VeiculoOficina.prototype, "updated_at", void 0);
exports.VeiculoOficina = VeiculoOficina = __decorate([
    (0, typeorm_1.Entity)('veiculos_oficinas')
], VeiculoOficina);
//# sourceMappingURL=veiculo-oficina.entity.js.map