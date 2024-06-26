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
exports.UtilitiesService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const bcrypt = require("bcrypt");
let UtilitiesService = class UtilitiesService {
    constructor(lazyModuleLoader) {
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async generateSalt(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    async hashString(pass) {
        const saltRounds = 10;
        var passHash;
        await bcrypt.hash(pass, saltRounds).then(function (hash) {
            passHash = hash;
        });
        return passHash;
    }
    async compareString(text, hash) {
        var response = false;
        await bcrypt.compare(text, hash).then(function (result) {
            response = result;
        });
        return response;
    }
};
exports.UtilitiesService = UtilitiesService;
exports.UtilitiesService = UtilitiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.LazyModuleLoader])
], UtilitiesService);
//# sourceMappingURL=utilities.service.js.map