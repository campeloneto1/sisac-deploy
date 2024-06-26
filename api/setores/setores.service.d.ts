import { LazyModuleLoader } from '@nestjs/core';
import { Repository } from 'typeorm';
import { Setor as SetorEntity } from './setor.entity';
import { Setor as SetorInterface, Setores as SetoresInterface } from './setor.interface';
import { User } from 'src/users/user.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class SetoresService {
    private setorRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(setorRepository: Repository<SetorEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<SetoresInterface>;
    find(id: number): Promise<SetorInterface | null>;
    create(object: SetorInterface, idUser: User): Promise<void>;
    update(id: number, object: SetorInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    whereSubunidade(id: number): Promise<SetoresInterface | null>;
    policiaisSetor(params: any, idUser: User): Promise<any>;
}
