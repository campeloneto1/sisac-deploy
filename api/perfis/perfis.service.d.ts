import { Repository } from 'typeorm';
import { LazyModuleLoader } from '@nestjs/core';
import { Perfil as PerfilEntity } from './perfil.entity';
import { Perfil as PerfilInterface, Perfis as PerfisInterface } from './perfil.interface';
import { User } from 'src/users/user.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class PerfisService {
    private perfilRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(perfilRepository: Repository<PerfilEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<PerfisInterface>;
    find(id: number): Promise<PerfilInterface | null>;
    create(object: PerfilInterface, idUser: User): Promise<void>;
    update(id: number, object: PerfilInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
