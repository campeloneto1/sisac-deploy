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
exports.Modelo = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const marca_entity_1 = require("../marcas/marca.entity");
const armamento_entity_1 = require("../armamentos/armamento.entity");
const veiculo_entity_1 = require("../veiculos/veiculo.entity");
let Modelo = class Modelo {
};
exports.Modelo = Modelo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Modelo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], Modelo.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 5
    }),
    __metadata("design:type", String)
], Modelo.prototype, "abreviatura", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => marca_entity_1.Marca, (marca) => marca.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", marca_entity_1.Marca)
], Modelo.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => armamento_entity_1.Armamento, armamento => armamento.modelo),
    __metadata("design:type", Array)
], Modelo.prototype, "armamentos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => veiculo_entity_1.Veiculo, veiculo => veiculo.modelo),
    __metadata("design:type", Array)
], Modelo.prototype, "veiculos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Modelo.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Modelo.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Modelo.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Modelo.prototype, "updated_at", void 0);
exports.Modelo = Modelo = __decorate([
    (0, typeorm_1.Entity)('modelos'),
    (0, typeorm_1.Index)(['nome', 'marca'], { unique: true })
], Modelo);
//# sourceMappingURL=modelo.entity.js.map