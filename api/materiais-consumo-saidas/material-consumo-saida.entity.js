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
exports.MaterialConsumoSaida = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const material_consumo_saida_item_entity_1 = require("../materiais-consumo-saidas-itens/material-consumo-saida-item.entity");
let MaterialConsumoSaida = class MaterialConsumoSaida {
};
exports.MaterialConsumoSaida = MaterialConsumoSaida;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MaterialConsumoSaida.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'datetime'
    }),
    __metadata("design:type", Date)
], MaterialConsumoSaida.prototype, "data_saida", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'text'
    }),
    __metadata("design:type", String)
], MaterialConsumoSaida.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], MaterialConsumoSaida.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], MaterialConsumoSaida.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => material_consumo_saida_item_entity_1.MaterialConsumoSaidaItem, materiaisconsumosaidasitens => materiaisconsumosaidasitens.material_consumo_saida),
    __metadata("design:type", Array)
], MaterialConsumoSaida.prototype, "materiais_consumo_saidas_itens", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], MaterialConsumoSaida.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], MaterialConsumoSaida.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MaterialConsumoSaida.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MaterialConsumoSaida.prototype, "updated_at", void 0);
exports.MaterialConsumoSaida = MaterialConsumoSaida = __decorate([
    (0, typeorm_1.Entity)('materiais_consumo_saidas')
], MaterialConsumoSaida);
//# sourceMappingURL=material-consumo-saida.entity.js.map