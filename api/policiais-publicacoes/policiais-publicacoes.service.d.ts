import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { PolicialPublicacao as PolicialPublicacaoEntity } from './policial-publicacao.entity';
import { PolicialPublicacao as PolicialPublicacaoInterface, PoliciaisPublicacoes as PoliciaisPublicacoesInterface } from './policial-publicacao.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class PoliciaisPublicacoesService {
    private policialFeriasRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(policialFeriasRepository: Repository<PolicialPublicacaoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<PoliciaisPublicacoesInterface>;
    find(id: number, idUser: User): Promise<PolicialPublicacaoInterface | null>;
    create(object: PolicialPublicacaoInterface, idUser: User): Promise<void>;
    update(id: number, object: PolicialPublicacaoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    wherePolicial(id: number, idUser: User): Promise<PoliciaisPublicacoesInterface | null>;
}
