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
exports.MaterialPolicialItem = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const material_entity_1 = require("../materiais/material.entity");
const material_policial_entity_1 = require("../materiais-policiais/material-policial.entity");
let MaterialPolicialItem = class MaterialPolicialItem {
};
exports.MaterialPolicialItem = MaterialPolicialItem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MaterialPolicialItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], MaterialPolicialItem.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], MaterialPolicialItem.prototype, "quantidade_devolucao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => material_entity_1.Material, (material) => material.id, {
        eager: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", material_entity_1.Material)
], MaterialPolicialItem.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => material_policial_entity_1.MaterialPolicial, (material_policial) => material_policial.id, {
        eager: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", material_policial_entity_1.MaterialPolicial)
], MaterialPolicialItem.prototype, "material_policial", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], MaterialPolicialItem.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], MaterialPolicialItem.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MaterialPolicialItem.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MaterialPolicialItem.prototype, "updated_at", void 0);
exports.MaterialPolicialItem = MaterialPolicialItem = __decorate([
    (0, typeorm_1.Entity)('materiais_policiais_itens'),
    (0, typeorm_1.Index)(['material', 'material_policial'], { unique: true })
], MaterialPolicialItem);
//# sourceMappingURL=material-policial-item.entity.js.map