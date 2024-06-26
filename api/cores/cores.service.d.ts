import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { Cor as CorEntity } from './cor.entity';
import { Cor as CorInterface, Cores as CoresInterface } from './cor.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class CoresService {
    private corRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(corRepository: Repository<CorEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<CoresInterface>;
    find(id: number): Promise<CorInterface | null>;
    create(object: CorInterface, idUser: User): Promise<void>;
    update(id: number, object: CorInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
