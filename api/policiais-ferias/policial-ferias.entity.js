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
exports.PolicialFerias = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const policial_entity_1 = require("../policiais/policial.entity");
let PolicialFerias = class PolicialFerias {
};
exports.PolicialFerias = PolicialFerias;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PolicialFerias.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => policial_entity_1.Policial, (policial) => policial.id, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", policial_entity_1.Policial)
], PolicialFerias.prototype, "policial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], PolicialFerias.prototype, "ano", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'date'
    }),
    __metadata("design:type", Date)
], PolicialFerias.prototype, "data_inicial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], PolicialFerias.prototype, "dias", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'date'
    }),
    __metadata("design:type", Date)
], PolicialFerias.prototype, "data_final", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], PolicialFerias.prototype, "boletim", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], PolicialFerias.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], PolicialFerias.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PolicialFerias.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PolicialFerias.prototype, "updated_at", void 0);
exports.PolicialFerias = PolicialFerias = __decorate([
    (0, typeorm_1.Entity)('policiais_ferias')
], PolicialFerias);
//# sourceMappingURL=policial-ferias.entity.js.map