import { LazyModuleLoader } from '@nestjs/core';
import { Repository } from 'typeorm';
import { Policial as PolicialEntity } from './policial.entity';
import { Policial as PolicialInterface, Policiais as PoliciaisInterface } from './policial.interface';
import { User } from 'src/users/user.interface';
import { UsersService } from 'src/users/users.service';
import { UtilitiesService } from 'src/utilities/utilities.service';
import { LogsService } from 'src/logs/logs.service';
import { UsersSubunidadesService } from 'src/users-subunidades/users-subunidades.service';
export declare class PoliciaisService {
    private policialRepository;
    private lazyModuleLoader;
    private usersService;
    private usersSubunidadesService;
    private utilitiesService;
    private logsService;
    constructor(policialRepository: Repository<PolicialEntity>, lazyModuleLoader: LazyModuleLoader, usersService: UsersService, usersSubunidadesService: UsersSubunidadesService, utilitiesService: UtilitiesService, logsService: LogsService);
    index(params: any, idUser: User): Promise<PoliciaisInterface>;
    find(id: number, idUser: User): Promise<PolicialInterface | null>;
    find2(id: number, idUser: User): Promise<PolicialInterface | null>;
    create(object: PolicialInterface, idUser: User): Promise<void>;
    update(id: number, object: PolicialInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    disponiveis(params: any, idUser: User): Promise<PoliciaisInterface>;
    quantidade(params: any, idUser: User): Promise<number>;
    updateFoto(id: number, object: any, idUser: User): Promise<void>;
    relatorio(object: any, idUser: User): Promise<PoliciaisInterface>;
}
