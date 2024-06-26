import { LazyModuleLoader } from '@nestjs/core';
import { Repository } from 'typeorm';
import { PublicacaoTipo as PublicacaoTipoEntity } from './publicacao-tipo.entity';
import { PublicacaoTipo as PublicacaoTipoInterface, PublicacoesTipos as PublicacoesTiposInterface } from './publicacao-tipo.interface';
import { User } from 'src/users/user.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class PublicacoesTiposService {
    private sexoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(sexoRepository: Repository<PublicacaoTipoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<PublicacoesTiposInterface>;
    find(id: number): Promise<PublicacaoTipoInterface | null>;
    create(object: PublicacaoTipoInterface, idUser: User): Promise<void>;
    update(id: number, object: PublicacaoTipoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
