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
exports.PolicialPublicacao = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const policial_entity_1 = require("../policiais/policial.entity");
const publicacao_tipo_entity_1 = require("../publicacoes-tipos/publicacao-tipo.entity");
let PolicialPublicacao = class PolicialPublicacao {
};
exports.PolicialPublicacao = PolicialPublicacao;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PolicialPublicacao.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => policial_entity_1.Policial, (policial) => policial.id, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", policial_entity_1.Policial)
], PolicialPublicacao.prototype, "policial", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => publicacao_tipo_entity_1.PublicacaoTipo, (publicacaoTipo) => publicacaoTipo.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", publicacao_tipo_entity_1.PublicacaoTipo)
], PolicialPublicacao.prototype, "publicacao_tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 2000,
    }),
    __metadata("design:type", String)
], PolicialPublicacao.prototype, "texto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 40,
    }),
    __metadata("design:type", String)
], PolicialPublicacao.prototype, "boletim", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], PolicialPublicacao.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], PolicialPublicacao.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PolicialPublicacao.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PolicialPublicacao.prototype, "updated_at", void 0);
exports.PolicialPublicacao = PolicialPublicacao = __decorate([
    (0, typeorm_1.Entity)('policiais_publicacoes')
], PolicialPublicacao);
//# sourceMappingURL=policial-publicacao.entity.js.map