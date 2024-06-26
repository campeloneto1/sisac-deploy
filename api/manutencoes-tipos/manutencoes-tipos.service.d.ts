import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { ManutencaoTipo as ManutencaoTipoEntity } from './manutencao-tipo.entity';
import { ManutencaoTipo as ManutencaoTipoInterface, ManutencoesTipos as ManutencoesTiposInterface } from './manutencao-tipo.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class ManutencoesTiposService {
    private manutencaoTipoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(manutencaoTipoRepository: Repository<ManutencaoTipoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<ManutencoesTiposInterface>;
    find(id: number): Promise<ManutencaoTipoInterface | null>;
    create(object: ManutencaoTipoInterface, idUser: User): Promise<void>;
    update(id: number, object: ManutencaoTipoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
