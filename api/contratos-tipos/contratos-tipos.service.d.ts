import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { ContratoTipo as ContratoTipoEntity } from './contrato-tipo.entity';
import { ContratoTipo as ContratoTipoInterface, ContratosTipos as ContratosTiposInterface } from './contrato-tipo.interface';
export declare class ContratosTiposService {
    private contratoTipoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(contratoTipoRepository: Repository<ContratoTipoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<ContratosTiposInterface>;
    find(id: number): Promise<ContratoTipoInterface | null>;
    create(object: ContratoTipoInterface, idUser: User): Promise<void>;
    update(id: number, object: ContratoTipoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
