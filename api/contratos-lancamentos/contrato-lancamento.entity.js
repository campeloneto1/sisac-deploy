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
exports.ContratoLancamento = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const contrato_entity_1 = require("../contratos/contrato.entity");
let ContratoLancamento = class ContratoLancamento {
};
exports.ContratoLancamento = ContratoLancamento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ContratoLancamento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => contrato_entity_1.Contrato, (contrato) => contrato.id, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", contrato_entity_1.Contrato)
], ContratoLancamento.prototype, "contrato", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'decimal',
        precision: 10,
        scale: 2
    }),
    __metadata("design:type", Number)
], ContratoLancamento.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'date'
    }),
    __metadata("design:type", Date)
], ContratoLancamento.prototype, "mes_referencia", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'text'
    }),
    __metadata("design:type", String)
], ContratoLancamento.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], ContratoLancamento.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], ContratoLancamento.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ContratoLancamento.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ContratoLancamento.prototype, "updated_at", void 0);
exports.ContratoLancamento = ContratoLancamento = __decorate([
    (0, typeorm_1.Entity)('contratos_lancamentos')
], ContratoLancamento);
//# sourceMappingURL=contrato-lancamento.entity.js.map