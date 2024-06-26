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
exports.Material = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const modelo_entity_1 = require("../modelos/modelo.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const material_tipo_entity_1 = require("../materiais-tipos/material-tipo.entity");
const material_policial_item_entity_1 = require("../materiais-policiais-itens/material-policial-item.entity");
let Material = class Material {
};
exports.Material = Material;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Material.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Material.prototype, "serial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], Material.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], Material.prototype, "quantidade_disponivel", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'date',
    }),
    __metadata("design:type", Date)
], Material.prototype, "data_validade", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'date',
    }),
    __metadata("design:type", Date)
], Material.prototype, "data_baixa", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'text',
    }),
    __metadata("design:type", String)
], Material.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], Material.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => modelo_entity_1.Modelo, (modelo) => modelo.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", modelo_entity_1.Modelo)
], Material.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => material_tipo_entity_1.MaterialTipo, (materialtipo) => materialtipo.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", material_tipo_entity_1.MaterialTipo)
], Material.prototype, "material_tipo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => material_policial_item_entity_1.MaterialPolicialItem, materiaispoliciaisitens => materiaispoliciaisitens.material),
    __metadata("design:type", Array)
], Material.prototype, "materiais_policiais_itens", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", user_entity_1.User)
], Material.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", user_entity_1.User)
], Material.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Material.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Material.prototype, "updated_at", void 0);
exports.Material = Material = __decorate([
    (0, typeorm_1.Entity)('materiais'),
    (0, typeorm_1.Index)(['serial', 'subunidade'], { unique: true })
], Material);
//# sourceMappingURL=material.entity.js.map