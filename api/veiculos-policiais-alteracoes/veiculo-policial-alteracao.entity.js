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
exports.VeiculoPolicialAlteracao = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const veiculo_policial_entity_1 = require("../veiculos-policiais/veiculo-policial.entity");
let VeiculoPolicialAlteracao = class VeiculoPolicialAlteracao {
};
exports.VeiculoPolicialAlteracao = VeiculoPolicialAlteracao;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VeiculoPolicialAlteracao.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => veiculo_policial_entity_1.VeiculoPolicial, (veiculopolicial) => veiculopolicial.id, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", veiculo_policial_entity_1.VeiculoPolicial)
], VeiculoPolicialAlteracao.prototype, "veiculo_policial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], VeiculoPolicialAlteracao.prototype, "foto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], VeiculoPolicialAlteracao.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], VeiculoPolicialAlteracao.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VeiculoPolicialAlteracao.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], VeiculoPolicialAlteracao.prototype, "updated_at", void 0);
exports.VeiculoPolicialAlteracao = VeiculoPolicialAlteracao = __decorate([
    (0, typeorm_1.Entity)('veiculos_policiais_alteracoes')
], VeiculoPolicialAlteracao);
//# sourceMappingURL=veiculo-policial-alteracao.entity.js.map