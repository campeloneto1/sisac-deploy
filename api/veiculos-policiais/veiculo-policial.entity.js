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
exports.VeiculoPolicial = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const veiculo_entity_1 = require("../veiculos/veiculo.entity");
const policial_entity_1 = require("../policiais/policial.entity");
const cidade_entity_1 = require("../cidades/cidade.entity");
let VeiculoPolicial = class VeiculoPolicial {
};
exports.VeiculoPolicial = VeiculoPolicial;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VeiculoPolicial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => veiculo_entity_1.Veiculo, (veiculo) => veiculo.id, {
        eager: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", veiculo_entity_1.Veiculo)
], VeiculoPolicial.prototype, "veiculo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => policial_entity_1.Policial, (policial) => policial.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", policial_entity_1.Policial)
], VeiculoPolicial.prototype, "policial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Date)
], VeiculoPolicial.prototype, "data_inicial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Date)
], VeiculoPolicial.prototype, "data_final", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], VeiculoPolicial.prototype, "km_inicial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], VeiculoPolicial.prototype, "km_final", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'text'
    }),
    __metadata("design:type", String)
], VeiculoPolicial.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cidade_entity_1.Cidade, (cidade) => cidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", cidade_entity_1.Cidade)
], VeiculoPolicial.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], VeiculoPolicial.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], VeiculoPolicial.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], VeiculoPolicial.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VeiculoPolicial.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], VeiculoPolicial.prototype, "updated_at", void 0);
exports.VeiculoPolicial = VeiculoPolicial = __decorate([
    (0, typeorm_1.Entity)('veiculos_policiais')
], VeiculoPolicial);
//# sourceMappingURL=veiculo-policial.entity.js.map