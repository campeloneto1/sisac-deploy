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
exports.Armamento = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const modelo_entity_1 = require("../modelos/modelo.entity");
const armamento_tipo_entity_1 = require("../armamentos-tipos/armamento-tipo.entity");
const armamento_calibre_entity_1 = require("../armamentos-calibres/armamento-calibre.entity");
const armamento_tamanho_entity_1 = require("../armamentos-tamanhos/armamento-tamanho.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const armamento_emprestimo_item_entity_1 = require("../armamentos-emprestimos-itens/armamento-emprestimo-item.entity");
let Armamento = class Armamento {
};
exports.Armamento = Armamento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Armamento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], Armamento.prototype, "serial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], Armamento.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], Armamento.prototype, "quantidade_disponivel", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'date'
    }),
    __metadata("design:type", Date)
], Armamento.prototype, "data_validade", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'date'
    }),
    __metadata("design:type", Date)
], Armamento.prototype, "data_baixa", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'text'
    }),
    __metadata("design:type", String)
], Armamento.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], Armamento.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => modelo_entity_1.Modelo, (modelo) => modelo.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", modelo_entity_1.Modelo)
], Armamento.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => armamento_tipo_entity_1.ArmamentoTipo, (armamentotipo) => armamentotipo.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", armamento_tipo_entity_1.ArmamentoTipo)
], Armamento.prototype, "armamento_tipo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => armamento_calibre_entity_1.ArmamentoCalibre, (armamentocalibre) => armamentocalibre.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", armamento_calibre_entity_1.ArmamentoCalibre)
], Armamento.prototype, "armamento_calibre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => armamento_tamanho_entity_1.ArmamentoTamanho, (armamentotamanho) => armamentotamanho.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", armamento_tamanho_entity_1.ArmamentoTamanho)
], Armamento.prototype, "armamento_tamanho", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => armamento_emprestimo_item_entity_1.ArmamentoEmprestimoItem, armamentoemprestimoitens => armamentoemprestimoitens.armamento),
    __metadata("design:type", Array)
], Armamento.prototype, "armamentos_emprestimos_itens", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Armamento.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Armamento.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Armamento.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Armamento.prototype, "updated_at", void 0);
exports.Armamento = Armamento = __decorate([
    (0, typeorm_1.Entity)('armamentos'),
    (0, typeorm_1.Index)(['serial', 'subunidade'], { unique: true })
], Armamento);
//# sourceMappingURL=armamento.entity.js.map