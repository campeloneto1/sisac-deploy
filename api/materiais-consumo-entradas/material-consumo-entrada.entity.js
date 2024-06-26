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
exports.MaterialConsumoEntrada = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const material_consumo_entrada_item_entity_1 = require("../materiais-consumo-entradas-itens/material-consumo-entrada-item.entity");
let MaterialConsumoEntrada = class MaterialConsumoEntrada {
};
exports.MaterialConsumoEntrada = MaterialConsumoEntrada;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MaterialConsumoEntrada.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'datetime'
    }),
    __metadata("design:type", Date)
], MaterialConsumoEntrada.prototype, "data_entrada", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'text'
    }),
    __metadata("design:type", String)
], MaterialConsumoEntrada.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], MaterialConsumoEntrada.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], MaterialConsumoEntrada.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => material_consumo_entrada_item_entity_1.MaterialConsumoEntradaItem, materiaisconsumoentradasitens => materiaisconsumoentradasitens.material_consumo_entrada),
    __metadata("design:type", Array)
], MaterialConsumoEntrada.prototype, "materiais_consumo_entradas_itens", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], MaterialConsumoEntrada.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], MaterialConsumoEntrada.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MaterialConsumoEntrada.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MaterialConsumoEntrada.prototype, "updated_at", void 0);
exports.MaterialConsumoEntrada = MaterialConsumoEntrada = __decorate([
    (0, typeorm_1.Entity)('materiais_consumo_entradas')
], MaterialConsumoEntrada);
//# sourceMappingURL=material-consumo-entrada.entity.js.map