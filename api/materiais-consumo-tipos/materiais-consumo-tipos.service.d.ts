import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { MaterialConsumoTipo as MaterialConsumoTipoEntity } from './material-consumo-tipo.entity';
import { MaterialConsumoTipo as MaterialConsumoTipoInterface, MateriaisConsumoTipos as MateriaisConsumoTiposInterface } from './material-consumo-tipo.interface';
export declare class MateriaisConsumoTiposService {
    private materialConsumoTipoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(materialConsumoTipoRepository: Repository<MaterialConsumoTipoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<MateriaisConsumoTiposInterface>;
    find(id: number): Promise<MaterialConsumoTipoInterface | null>;
    create(object: MaterialConsumoTipoInterface, idUser: User): Promise<void>;
    update(id: number, object: MaterialConsumoTipoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
