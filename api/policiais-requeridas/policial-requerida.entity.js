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
exports.PolicialRequerida = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const policial_entity_1 = require("../policiais/policial.entity");
let PolicialRequerida = class PolicialRequerida {
};
exports.PolicialRequerida = PolicialRequerida;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PolicialRequerida.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => policial_entity_1.Policial, (policial) => policial.id, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", policial_entity_1.Policial)
], PolicialRequerida.prototype, "policial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], PolicialRequerida.prototype, "nup", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 40,
    }),
    __metadata("design:type", String)
], PolicialRequerida.prototype, "boletim_entrada", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 40,
    }),
    __metadata("design:type", String)
], PolicialRequerida.prototype, "boletim_publicacao", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'date',
    }),
    __metadata("design:type", Date)
], PolicialRequerida.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", user_entity_1.User)
], PolicialRequerida.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", user_entity_1.User)
], PolicialRequerida.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PolicialRequerida.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PolicialRequerida.prototype, "updated_at", void 0);
exports.PolicialRequerida = PolicialRequerida = __decorate([
    (0, typeorm_1.Entity)('policiais_requeridas')
], PolicialRequerida);
//# sourceMappingURL=policial-requerida.entity.js.map