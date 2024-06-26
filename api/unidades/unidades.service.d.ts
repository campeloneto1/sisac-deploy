import { Unidade as UnidadeEntity } from './unidade.entity';
import { Unidade as UnidadeInterface, Unidades as UnidadesInterface } from './unidade.interface';
import { Repository } from 'typeorm';
import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class UnidadesService {
    private unidadeRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(unidadeRepository: Repository<UnidadeEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<UnidadesInterface>;
    find(id: number): Promise<UnidadeInterface | null>;
    create(object: UnidadeInterface, idUser: User): Promise<void>;
    update(id: number, object: UnidadeInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
