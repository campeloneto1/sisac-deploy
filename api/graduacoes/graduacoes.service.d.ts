import { LazyModuleLoader } from '@nestjs/core';
import { Repository } from 'typeorm';
import { Graduacao as GraduacaoEntity } from './graduacao.entity';
import { Graduacao as GraduacaoInterface, Graduacoes as GraduacoesInterface } from './graduacao.interface';
import { User } from 'src/users/user.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class GraduacoesService {
    private graduacaoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(graduacaoRepository: Repository<GraduacaoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<GraduacoesInterface>;
    find(id: number): Promise<GraduacaoInterface | null>;
    create(object: GraduacaoInterface, idUser: User): Promise<void>;
    update(id: number, object: GraduacaoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    policiaisGraduacoes(params: any, idUser: User): Promise<any>;
}
