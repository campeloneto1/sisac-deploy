import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { PatrimonioTipo as PatrimonioTipoEntity } from './patrimonio-tipo.entity';
import { PatrimonioTipo as PatrimonioTipoInterface, PatrimoniosTipos as PatrimoniosTiposInterface } from './patrimonio-tipo.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class PatrimoniosTiposService {
    private patrimonioTipoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(patrimonioTipoRepository: Repository<PatrimonioTipoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<PatrimoniosTiposInterface>;
    find(id: number): Promise<PatrimonioTipoInterface | null>;
    create(object: PatrimonioTipoInterface, idUser: User): Promise<void>;
    update(id: number, object: PatrimonioTipoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
