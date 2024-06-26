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
exports.VeiculoTipo = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const veiculo_entity_1 = require("../veiculos/veiculo.entity");
let VeiculoTipo = class VeiculoTipo {
};
exports.VeiculoTipo = VeiculoTipo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VeiculoTipo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
        unique: true
    }),
    __metadata("design:type", String)
], VeiculoTipo.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => veiculo_entity_1.Veiculo, veiculo => veiculo.modelo),
    __metadata("design:type", Array)
], VeiculoTipo.prototype, "veiculos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], VeiculoTipo.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], VeiculoTipo.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VeiculoTipo.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], VeiculoTipo.prototype, "updated_at", void 0);
exports.VeiculoTipo = VeiculoTipo = __decorate([
    (0, typeorm_1.Entity)('veiculos_tipos')
], VeiculoTipo);
//# sourceMappingURL=veiculo-tipo.entity.js.map