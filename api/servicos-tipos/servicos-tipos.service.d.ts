import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { ServicoTipo as ServicoTipoEntity } from './servico-tipo.entity';
import { ServicoTipo as ServicoTipoInterface, ServicosTipos as ServicosTiposInterface } from './servico-tipo.interface';
export declare class ServicosTiposService {
    private sexoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(sexoRepository: Repository<ServicoTipoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<ServicosTiposInterface>;
    find(id: number): Promise<ServicoTipoInterface | null>;
    create(object: ServicoTipoInterface, idUser: User): Promise<void>;
    update(id: number, object: ServicoTipoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
