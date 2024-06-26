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
exports.ArmamentoCalibre = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const armamento_entity_1 = require("../armamentos/armamento.entity");
let ArmamentoCalibre = class ArmamentoCalibre {
};
exports.ArmamentoCalibre = ArmamentoCalibre;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ArmamentoCalibre.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], ArmamentoCalibre.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => armamento_entity_1.Armamento, armamento => armamento.armamento_calibre),
    __metadata("design:type", Array)
], ArmamentoCalibre.prototype, "armamentos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], ArmamentoCalibre.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], ArmamentoCalibre.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ArmamentoCalibre.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ArmamentoCalibre.prototype, "updated_at", void 0);
exports.ArmamentoCalibre = ArmamentoCalibre = __decorate([
    (0, typeorm_1.Entity)('armamentos_calibres')
], ArmamentoCalibre);
//# sourceMappingURL=armamento-calibre.entity.js.map