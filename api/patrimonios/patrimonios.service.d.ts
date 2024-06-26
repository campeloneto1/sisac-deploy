import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { Patrimonio as PatrimonioEntity } from './patrimonio.entity';
import { Patrimonio as PatrimonioInterface, Patrimonios as PatrimoniosInterface } from './patrimonio.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class PatrimoniosService {
    private patrimonioRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(patrimonioRepository: Repository<PatrimonioEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<PatrimoniosInterface>;
    find(id: number, idUser: User): Promise<PatrimonioInterface | null>;
    create(object: PatrimonioInterface, idUser: User): Promise<void>;
    update(id: number, object: PatrimonioInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    disponiveis(params: any, idUser: User): Promise<PatrimoniosInterface>;
    relatorio(object: any, idUser: User): Promise<PatrimoniosInterface>;
}
