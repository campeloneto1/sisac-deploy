import { LazyModuleLoader } from '@nestjs/core';
import { Repository } from 'typeorm';
import { Subunidade as SubunidadeEntity } from './subunidade.entity';
import { Subunidade as SubunidadeInterface, Subunidades as SubunidadesInterface } from './subunidade.interface';
import { User } from 'src/users/user.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class SubunidadesService {
    private subunidadeRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(subunidadeRepository: Repository<SubunidadeEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<SubunidadesInterface>;
    find(id: number): Promise<SubunidadeInterface | null>;
    create(object: SubunidadeInterface, idUser: User): Promise<void>;
    update(id: number, object: SubunidadeInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    whereUnidade(id: number, idUser: User): Promise<SubunidadesInterface | null>;
}
