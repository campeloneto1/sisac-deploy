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
exports.Estado = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const pais_entity_1 = require("../paises/pais.entity");
const cidade_entity_1 = require("../cidades/cidade.entity");
let Estado = class Estado {
};
exports.Estado = Estado;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Estado.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
        unique: true
    }),
    __metadata("design:type", String)
], Estado.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 5
    }),
    __metadata("design:type", String)
], Estado.prototype, "abreviatura", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pais_entity_1.Pais, (pais) => pais.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", pais_entity_1.Pais)
], Estado.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => cidade_entity_1.Cidade, cidade => cidade.estado),
    __metadata("design:type", Array)
], Estado.prototype, "cidades", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Estado.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Estado.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Estado.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Estado.prototype, "updated_at", void 0);
exports.Estado = Estado = __decorate([
    (0, typeorm_1.Entity)('estados')
], Estado);
//# sourceMappingURL=estado.entity.js.map