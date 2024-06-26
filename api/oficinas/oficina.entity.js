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
exports.Oficina = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const cidade_entity_1 = require("../cidades/cidade.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const veiculo_oficina_entity_1 = require("../veiculos-oficinas/veiculo-oficina.entity");
let Oficina = class Oficina {
};
exports.Oficina = Oficina;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Oficina.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], Oficina.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 15,
    }),
    __metadata("design:type", String)
], Oficina.prototype, "cnpj", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 11,
    }),
    __metadata("design:type", String)
], Oficina.prototype, "telefone1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 11,
    }),
    __metadata("design:type", String)
], Oficina.prototype, "telefone2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Oficina.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Oficina.prototype, "gerente", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Oficina.prototype, "rua", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], Oficina.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Oficina.prototype, "bairro", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 8,
    }),
    __metadata("design:type", String)
], Oficina.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cidade_entity_1.Cidade, (cidade) => cidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", cidade_entity_1.Cidade)
], Oficina.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], Oficina.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => veiculo_oficina_entity_1.VeiculoOficina, veiculosoficinal => veiculosoficinal.oficina),
    __metadata("design:type", Array)
], Oficina.prototype, "veiculos_oficinas", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Oficina.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Oficina.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Oficina.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Oficina.prototype, "updated_at", void 0);
exports.Oficina = Oficina = __decorate([
    (0, typeorm_1.Entity)('oficinas'),
    (0, typeorm_1.Index)(['cnpj', 'subunidade'], { unique: true })
], Oficina);
//# sourceMappingURL=oficina.entity.js.map