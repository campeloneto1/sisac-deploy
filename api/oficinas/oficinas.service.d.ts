import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { Oficina as OficinaEntity } from './oficina.entity';
import { Oficina as OficinaInterface, Oficinas as OficinasInterface } from './oficina.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class OficinasService {
    private oficinaRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(oficinaRepository: Repository<OficinaEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<OficinasInterface>;
    find(id: number, idUser: User): Promise<OficinaInterface | null>;
    create(object: OficinaInterface, idUser: User): Promise<void>;
    update(id: number, object: OficinaInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
