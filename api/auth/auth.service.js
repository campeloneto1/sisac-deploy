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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const utilities_service_1 = require("../utilities/utilities.service");
const core_1 = require("@nestjs/core");
let AuthService = class AuthService {
    constructor(usersService, jwtService, utilitiesService, lazyModuleLoader) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.utilitiesService = utilitiesService;
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async signIn(username, senha) {
        const user = await this.usersService.signIn(username);
        if (user) {
            const pass = `${senha}${user.salt}`;
            if (await this.utilitiesService.compareString(pass, user.password)) {
                user.password = '';
                user.salt = '';
                const response = await this.jwtService.signAsync({ ...user });
                return {
                    access_token: response,
                    user: user
                };
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        utilities_service_1.UtilitiesService,
        core_1.LazyModuleLoader])
], AuthService);
//# sourceMappingURL=auth.service.js.map