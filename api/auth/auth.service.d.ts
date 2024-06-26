import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { UtilitiesService } from 'src/utilities/utilities.service';
import { LazyModuleLoader } from '@nestjs/core';
export declare class AuthService {
    private usersService;
    private jwtService;
    private utilitiesService;
    private lazyModuleLoader;
    constructor(usersService: UsersService, jwtService: JwtService, utilitiesService: UtilitiesService, lazyModuleLoader: LazyModuleLoader);
    signIn(username: string, senha: string): Promise<any>;
}
