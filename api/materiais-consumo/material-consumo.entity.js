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
exports.MaterialConsumo = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const modelo_entity_1 = require("../modelos/modelo.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const material_consumo_tipo_entity_1 = require("../materiais-consumo-tipos/material-consumo-tipo.entity");
const material_consumo_saida_item_entity_1 = require("../materiais-consumo-saidas-itens/material-consumo-saida-item.entity");
const material_consumo_entrada_item_entity_1 = require("../materiais-consumo-entradas-itens/material-consumo-entrada-item.entity");
let MaterialConsumo = class MaterialConsumo {
};
exports.MaterialConsumo = MaterialConsumo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MaterialConsumo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], MaterialConsumo.prototype, "serial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], MaterialConsumo.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], MaterialConsumo.prototype, "quantidade_alerta", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'date'
    }),
    __metadata("design:type", Date)
], MaterialConsumo.prototype, "data_validade", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'date'
    }),
    __metadata("design:type", Date)
], MaterialConsumo.prototype, "data_baixa", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'text'
    }),
    __metadata("design:type", String)
], MaterialConsumo.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], MaterialConsumo.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => modelo_entity_1.Modelo, (modelo) => modelo.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", modelo_entity_1.Modelo)
], MaterialConsumo.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => material_consumo_tipo_entity_1.MaterialConsumoTipo, (materialconsumotipo) => materialconsumotipo.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", material_consumo_tipo_entity_1.MaterialConsumoTipo)
], MaterialConsumo.prototype, "material_consumo_tipo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => material_consumo_saida_item_entity_1.MaterialConsumoSaidaItem, materiaisconsumosaidasitens => materiaisconsumosaidasitens.material_consumo),
    __metadata("design:type", Array)
], MaterialConsumo.prototype, "materiais_consumo_saidas_itens", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => material_consumo_entrada_item_entity_1.MaterialConsumoEntradaItem, materiaisconsumoentradasitens => materiaisconsumoentradasitens.material_consumo),
    __metadata("design:type", Array)
], MaterialConsumo.prototype, "materiais_consumo_entradas_itens", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], MaterialConsumo.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], MaterialConsumo.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MaterialConsumo.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MaterialConsumo.prototype, "updated_at", void 0);
exports.MaterialConsumo = MaterialConsumo = __decorate([
    (0, typeorm_1.Entity)('materiais_consumo'),
    (0, typeorm_1.Index)(['serial', 'subunidade'], { unique: true })
], MaterialConsumo);
//# sourceMappingURL=material-consumo.entity.js.map