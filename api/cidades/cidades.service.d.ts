import { Cidade as CidadeEntity } from './cidade.entity';
import { Repository } from 'typeorm';
import { LazyModuleLoader } from '@nestjs/core';
import { Cidade as CidadeInterface, Cidades as CidadesInterface } from './cidade.interface';
import { User } from 'src/users/user.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class CidadesService {
    private cidadeRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(cidadeRepository: Repository<CidadeEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<CidadesInterface>;
    find(id: number): Promise<CidadeInterface | null>;
    create(object: CidadeInterface, idUser: User): Promise<void>;
    update(id: number, object: CidadeInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    whereEstado(id: number): Promise<CidadesInterface | null>;
}
