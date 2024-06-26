import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { ContratoObjeto as ContratoObjetoEntity } from './contrato-objeto.entity';
import { ContratoObjeto as ContratoObjetoInterface, ContratosObjetos as ContratosObjetosInterface } from './contrato-objeto.interface';
export declare class ContratosObjetosService {
    private corRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(corRepository: Repository<ContratoObjetoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<ContratosObjetosInterface>;
    find(id: number): Promise<ContratoObjetoInterface | null>;
    create(object: ContratoObjetoInterface, idUser: User): Promise<void>;
    update(id: number, object: ContratoObjetoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
