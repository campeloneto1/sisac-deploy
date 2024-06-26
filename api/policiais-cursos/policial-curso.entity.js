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
exports.PolicialCurso = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const policial_entity_1 = require("../policiais/policial.entity");
const curso_entity_1 = require("../cursos/curso.entity");
let PolicialCurso = class PolicialCurso {
};
exports.PolicialCurso = PolicialCurso;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PolicialCurso.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => policial_entity_1.Policial, (policial) => policial.id, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", policial_entity_1.Policial)
], PolicialCurso.prototype, "policial", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => curso_entity_1.Curso, (curso) => curso.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", curso_entity_1.Curso)
], PolicialCurso.prototype, "curso", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], PolicialCurso.prototype, "carga_horaria", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 100
    }),
    __metadata("design:type", String)
], PolicialCurso.prototype, "boletim", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'date'
    }),
    __metadata("design:type", Date)
], PolicialCurso.prototype, "data_inicial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'date'
    }),
    __metadata("design:type", Date)
], PolicialCurso.prototype, "data_final", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], PolicialCurso.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], PolicialCurso.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PolicialCurso.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PolicialCurso.prototype, "updated_at", void 0);
exports.PolicialCurso = PolicialCurso = __decorate([
    (0, typeorm_1.Entity)('policiais_cursos')
], PolicialCurso);
//# sourceMappingURL=policial-curso.entity.js.map