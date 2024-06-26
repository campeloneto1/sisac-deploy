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
exports.Cidade = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const estado_entity_1 = require("../estados/estado.entity");
const unidade_entity_1 = require("../unidades/unidade.entity");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const policial_entity_1 = require("../policiais/policial.entity");
let Cidade = class Cidade {
};
exports.Cidade = Cidade;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cidade.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], Cidade.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        length: 5,
    }),
    __metadata("design:type", String)
], Cidade.prototype, "abreviatura", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estado_entity_1.Estado, (estado) => estado.id, {
        eager: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", estado_entity_1.Estado)
], Cidade.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => unidade_entity_1.Unidade, (unidade) => unidade.cidade),
    __metadata("design:type", Array)
], Cidade.prototype, "unidades", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => subunidade_entity_1.Subunidade, (subunidade) => subunidade.cidade),
    __metadata("design:type", Array)
], Cidade.prototype, "subunidades", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => policial_entity_1.Policial, (policial) => policial.cidade),
    __metadata("design:type", Array)
], Cidade.prototype, "policiais", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Cidade.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], Cidade.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Cidade.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Cidade.prototype, "updated_at", void 0);
exports.Cidade = Cidade = __decorate([
    (0, typeorm_1.Entity)('cidades'),
    (0, typeorm_1.Index)(['nome', 'estado'], { unique: true })
], Cidade);
//# sourceMappingURL=cidade.entity.js.map