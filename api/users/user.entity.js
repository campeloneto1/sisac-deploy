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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const perfil_entity_1 = require("../perfis/perfil.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const policial_entity_1 = require("../policiais/policial.entity");
const user_subunidade_entity_1 = require("../users-subunidades/user-subunidade.entity");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], User.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 11,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: true,
        unique: true
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 11,
        unique: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], User.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: false,
        select: false
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        unique: true,
        nullable: false,
        select: false
    }),
    __metadata("design:type", String)
], User.prototype, "salt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => policial_entity_1.Policial, (policial) => policial.id, {
        eager: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", policial_entity_1.Policial)
], User.prototype, "policial", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => perfil_entity_1.Perfil, (perfil) => perfil.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", User)
], User.prototype, "perfil", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], User.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => user_subunidade_entity_1.UserSubunidade, usersubunidade => usersubunidade.user),
    __metadata("design:type", Array)
], User.prototype, "users_subunidades", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, (user) => user.id, {
        onDelete: 'SET NULL'
    }),
    __metadata("design:type", User)
], User.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, (user) => user.id, {
        onDelete: 'SET NULL'
    }),
    __metadata("design:type", User)
], User.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
//# sourceMappingURL=user.entity.js.map