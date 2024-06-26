import { Pais as PaisEntity } from './pais.entity';
import { Pais as PaisInterface, Paises as PaisesInterface } from './pais.interface';
import { Repository } from 'typeorm';
import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class PaisesService {
    private paisRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(paisRepository: Repository<PaisEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<PaisesInterface>;
    find(id: number): Promise<PaisInterface | null>;
    create(object: PaisInterface, idUser: User): Promise<void>;
    update(id: number, object: PaisInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
