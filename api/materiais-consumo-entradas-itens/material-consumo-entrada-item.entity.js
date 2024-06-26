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
exports.MaterialConsumoEntradaItem = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const material_consumo_entity_1 = require("../materiais-consumo/material-consumo.entity");
const material_consumo_entrada_entity_1 = require("../materiais-consumo-entradas/material-consumo-entrada.entity");
let MaterialConsumoEntradaItem = class MaterialConsumoEntradaItem {
};
exports.MaterialConsumoEntradaItem = MaterialConsumoEntradaItem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MaterialConsumoEntradaItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], MaterialConsumoEntradaItem.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => material_consumo_entity_1.MaterialConsumo, (materialconsumo) => materialconsumo.id, {
        eager: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", material_consumo_entity_1.MaterialConsumo)
], MaterialConsumoEntradaItem.prototype, "material_consumo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => material_consumo_entrada_entity_1.MaterialConsumoEntrada, (materialconsumoentrada) => materialconsumoentrada.id, {
        eager: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", material_consumo_entrada_entity_1.MaterialConsumoEntrada)
], MaterialConsumoEntradaItem.prototype, "material_consumo_entrada", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], MaterialConsumoEntradaItem.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], MaterialConsumoEntradaItem.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MaterialConsumoEntradaItem.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MaterialConsumoEntradaItem.prototype, "updated_at", void 0);
exports.MaterialConsumoEntradaItem = MaterialConsumoEntradaItem = __decorate([
    (0, typeorm_1.Entity)('materiais_consumo_entradas_itens'),
    (0, typeorm_1.Index)(['material_consumo', 'material_consumo_entrada'], { unique: true })
], MaterialConsumoEntradaItem);
//# sourceMappingURL=material-consumo-entrada-item.entity.js.map