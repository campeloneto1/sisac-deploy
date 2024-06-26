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
exports.Setor = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const policial_entity_1 = require("../policiais/policial.entity");
const patrimonio_entity_1 = require("../patrimonios/patrimonio.entity");
let Setor = class Setor {
};
exports.Setor = Setor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Setor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], Setor.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], Setor.prototype, "abreviatura", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 11,
    }),
    __metadata("design:type", String)
], Setor.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100,
        unique: true
    }),
    __metadata("design:type", String)
], Setor.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], Setor.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => policial_entity_1.Policial, policial => policial.setor),
    __metadata("design:type", Array)
], Setor.prototype, "policiais", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => patrimonio_entity_1.Patrimonio, patrimonio => patrimonio.setor),
    __metadata("design:type", Array)
], Setor.prototype, "patrimonios", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Setor.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Setor.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Setor.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Setor.prototype, "updated_at", void 0);
exports.Setor = Setor = __decorate([
    (0, typeorm_1.Entity)('setores'),
    (0, typeorm_1.Index)(['nome', 'subunidade'], { unique: true })
], Setor);
//# sourceMappingURL=setor.entity.js.map