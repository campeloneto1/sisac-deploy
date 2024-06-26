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
exports.ArmamentoEmprestimoItem = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const armamento_entity_1 = require("../armamentos/armamento.entity");
const armamento_emprestimo_entity_1 = require("../armamentos-emprestimos/armamento-emprestimo.entity");
let ArmamentoEmprestimoItem = class ArmamentoEmprestimoItem {
};
exports.ArmamentoEmprestimoItem = ArmamentoEmprestimoItem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ArmamentoEmprestimoItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], ArmamentoEmprestimoItem.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], ArmamentoEmprestimoItem.prototype, "quantidade_devolucao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => armamento_entity_1.Armamento, (armamento) => armamento.id, {
        eager: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", armamento_entity_1.Armamento)
], ArmamentoEmprestimoItem.prototype, "armamento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => armamento_emprestimo_entity_1.ArmamentoEmprestimo, (armamento_emprestimo) => armamento_emprestimo.id, {
        eager: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", armamento_emprestimo_entity_1.ArmamentoEmprestimo)
], ArmamentoEmprestimoItem.prototype, "armamento_emprestimo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], ArmamentoEmprestimoItem.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], ArmamentoEmprestimoItem.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ArmamentoEmprestimoItem.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ArmamentoEmprestimoItem.prototype, "updated_at", void 0);
exports.ArmamentoEmprestimoItem = ArmamentoEmprestimoItem = __decorate([
    (0, typeorm_1.Entity)('armamentos_emprestimos_itens'),
    (0, typeorm_1.Index)(['armamento', 'armamento_emprestimo'], { unique: true })
], ArmamentoEmprestimoItem);
//# sourceMappingURL=armamento-emprestimo-item.entity.js.map