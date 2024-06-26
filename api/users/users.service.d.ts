import { Repository } from 'typeorm';
import { LazyModuleLoader } from '@nestjs/core';
import { User as UserEntity } from './user.entity';
import { User as UserInterface, Users as UsersInterface } from './user.interface';
import { UtilitiesService } from 'src/utilities/utilities.service';
import { LogsService } from 'src/logs/logs.service';
import { UsersSubunidadesService } from 'src/users-subunidades/users-subunidades.service';
export declare class UsersService {
    private usersRepository;
    private utilitiesService;
    private usersSubunidadesService;
    private logsService;
    private lazyModuleLoader;
    constructor(usersRepository: Repository<UserEntity>, utilitiesService: UtilitiesService, usersSubunidadesService: UsersSubunidadesService, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: UserInterface): Promise<UsersInterface>;
    find(id: number): Promise<UserInterface | null>;
    wherePol(id: number): Promise<UserInterface | null>;
    create(object: UserInterface, idUser: UserInterface): Promise<void>;
    update(id: number, object: UserInterface, idUser: UserInterface): Promise<void>;
    remove(id: number, idUser: UserInterface): Promise<void>;
    signIn(username: string): Promise<UserInterface>;
    resetPass(object: UserInterface, idUser: UserInterface): Promise<void>;
    changePass(object: any): Promise<void>;
}
