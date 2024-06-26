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
exports.UserSubunidade = void 0;
const typeorm_1 = require("typeorm");
const subunidade_entity_1 = require("../subunidades/subunidade.entity");
const user_entity_1 = require("../users/user.entity");
let UserSubunidade = class UserSubunidade {
};
exports.UserSubunidade = UserSubunidade;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserSubunidade.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", user_entity_1.User)
], UserSubunidade.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subunidade_entity_1.Subunidade, (subunidade) => subunidade.id, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", subunidade_entity_1.Subunidade)
], UserSubunidade.prototype, "subunidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL'
    }),
    __metadata("design:type", user_entity_1.User)
], UserSubunidade.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, {
        onDelete: 'SET NULL'
    }),
    __metadata("design:type", user_entity_1.User)
], UserSubunidade.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserSubunidade.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], UserSubunidade.prototype, "updated_at", void 0);
exports.UserSubunidade = UserSubunidade = __decorate([
    (0, typeorm_1.Entity)('users_subunidades')
], UserSubunidade);
//# sourceMappingURL=user-subunidade.entity.js.map