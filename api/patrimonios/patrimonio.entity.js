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
exports.Patrimonio = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const patrimonio_tipo_entity_1 = require("../patrimonios-tipos/patrimonio-tipo.entity");
const setor_entity_1 = require("../setores/setor.entity");
let Patrimonio = class Patrimonio {
};
exports.Patrimonio = Patrimonio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Patrimonio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => setor_entity_1.Setor, (setor) => setor.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", setor_entity_1.Setor)
], Patrimonio.prototype, "setor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patrimonio_tipo_entity_1.PatrimonioTipo, (patrimoniotipo) => patrimoniotipo.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", patrimonio_tipo_entity_1.PatrimonioTipo)
], Patrimonio.prototype, "patrimonio_tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Patrimonio.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], Patrimonio.prototype, "serial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 50,
        unique: true
    }),
    __metadata("design:type", String)
], Patrimonio.prototype, "tombo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'date'
    }),
    __metadata("design:type", Date)
], Patrimonio.prototype, "data_baixa", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 10000,
    }),
    __metadata("design:type", String)
], Patrimonio.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Patrimonio.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Patrimonio.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Patrimonio.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Patrimonio.prototype, "updated_at", void 0);
exports.Patrimonio = Patrimonio = __decorate([
    (0, typeorm_1.Entity)('patrimonios')
], Patrimonio);
//# sourceMappingURL=patrimonio.entity.js.map