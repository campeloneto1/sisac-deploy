import { LazyModuleLoader } from '@nestjs/core';
import { Repository } from 'typeorm';
import { PolicialFerias as PolicialFeriasEntity } from './policial-ferias.entity';
import { PolicialFerias as PolicialFeriasInterface, PoliciaisFerias as PoliciaisFeriasInterface } from './policial-ferias.interface';
import { User } from 'src/users/user.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class PoliciaisFeriasService {
    private policialFeriasRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(policialFeriasRepository: Repository<PolicialFeriasEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<PoliciaisFeriasInterface>;
    find(id: number, idUser: User): Promise<PolicialFeriasInterface | null>;
    create(object: PolicialFeriasInterface, idUser: User): Promise<void>;
    update(id: number, object: PolicialFeriasInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    quantidade(params: any, idUser: User): Promise<number>;
    wherePolicial(id: number, idUser: User): Promise<PoliciaisFeriasInterface | null>;
}
