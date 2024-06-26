import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { MaterialTipo as MaterialTipoEntity } from './material-tipo.entity';
import { MaterialTipo as MaterialTipoInterface, MateriaisTipos as MateriaisTiposInterface } from './material-tipo.interface';
export declare class MateriaisTiposService {
    private materialTipoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(materialTipoRepository: Repository<MaterialTipoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<MateriaisTiposInterface>;
    find(id: number): Promise<MaterialTipoInterface | null>;
    create(object: MaterialTipoInterface, idUser: User): Promise<void>;
    update(id: number, object: MaterialTipoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
