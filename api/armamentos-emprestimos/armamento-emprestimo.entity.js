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
exports.ArmamentoEmprestimo = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const policial_entity_1 = require("../policiais/policial.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const armamento_emprestimo_item_entity_1 = require("../armamentos-emprestimos-itens/armamento-emprestimo-item.entity");
let ArmamentoEmprestimo = class ArmamentoEmprestimo {
};
exports.ArmamentoEmprestimo = ArmamentoEmprestimo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ArmamentoEmprestimo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'datetime'
    }),
    __metadata("design:type", Date)
], ArmamentoEmprestimo.prototype, "data_emprestimo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'datetime'
    }),
    __metadata("design:type", Date)
], ArmamentoEmprestimo.prototype, "data_devolucao", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'text'
    }),
    __metadata("design:type", String)
], ArmamentoEmprestimo.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], ArmamentoEmprestimo.prototype, "cautela", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], ArmamentoEmprestimo.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => policial_entity_1.Policial, (policial) => policial.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", policial_entity_1.Policial)
], ArmamentoEmprestimo.prototype, "policial", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => armamento_emprestimo_item_entity_1.ArmamentoEmprestimoItem, armamentoemprestimoitens => armamentoemprestimoitens.armamento_emprestimo),
    __metadata("design:type", Array)
], ArmamentoEmprestimo.prototype, "armamentos_emprestimos_itens", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], ArmamentoEmprestimo.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], ArmamentoEmprestimo.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ArmamentoEmprestimo.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ArmamentoEmprestimo.prototype, "updated_at", void 0);
exports.ArmamentoEmprestimo = ArmamentoEmprestimo = __decorate([
    (0, typeorm_1.Entity)('armamentos_emprestimos')
], ArmamentoEmprestimo);
//# sourceMappingURL=armamento-emprestimo.entity.js.map