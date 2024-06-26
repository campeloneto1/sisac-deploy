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
exports.Servico = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const empresa_entity_1 = require("../empresas/empresa.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const servico_tipo_entity_1 = require("../servicos-tipos/servico-tipo.entity");
let Servico = class Servico {
};
exports.Servico = Servico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Servico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], Servico.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.id, {
        eager: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", empresa_entity_1.Empresa)
], Servico.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => servico_tipo_entity_1.ServicoTipo, (contratotipo) => contratotipo.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", servico_tipo_entity_1.ServicoTipo)
], Servico.prototype, "servico_tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'date'
    }),
    __metadata("design:type", Date)
], Servico.prototype, "data_inicial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'date'
    }),
    __metadata("design:type", Date)
], Servico.prototype, "data_final", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'text'
    }),
    __metadata("design:type", String)
], Servico.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Servico.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Servico.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Servico.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Servico.prototype, "updated_at", void 0);
exports.Servico = Servico = __decorate([
    (0, typeorm_1.Entity)('servicos')
], Servico);
//# sourceMappingURL=servico.entity.js.map