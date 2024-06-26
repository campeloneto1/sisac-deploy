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
exports.MaterialPolicial = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const policial_entity_1 = require("../policiais/policial.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const material_policial_item_entity_1 = require("../materiais-policiais-itens/material-policial-item.entity");
let MaterialPolicial = class MaterialPolicial {
};
exports.MaterialPolicial = MaterialPolicial;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MaterialPolicial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'datetime'
    }),
    __metadata("design:type", Date)
], MaterialPolicial.prototype, "data_emprestimo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'datetime'
    }),
    __metadata("design:type", Date)
], MaterialPolicial.prototype, "data_devolucao", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'text'
    }),
    __metadata("design:type", String)
], MaterialPolicial.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], MaterialPolicial.prototype, "cautela", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], MaterialPolicial.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => policial_entity_1.Policial, (policial) => policial.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", policial_entity_1.Policial)
], MaterialPolicial.prototype, "policial", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => material_policial_item_entity_1.MaterialPolicialItem, materialpolicial => materialpolicial.material_policial),
    __metadata("design:type", Array)
], MaterialPolicial.prototype, "materiais_policiais_itens", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], MaterialPolicial.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], MaterialPolicial.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MaterialPolicial.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MaterialPolicial.prototype, "updated_at", void 0);
exports.MaterialPolicial = MaterialPolicial = __decorate([
    (0, typeorm_1.Entity)('materiais_policiais')
], MaterialPolicial);
//# sourceMappingURL=material-policial.entity.js.map