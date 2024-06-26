import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { Repository } from 'typeorm';
import { MaterialConsumoSaidaItem as MaterialConsumoSaidaItemEntity } from './material-consumo-saida-item.entity';
import { MaterialConsumoSaidaItem as MaterialConsumoSaidaItemInterface, MateriaisConsumoSaidasItens as MateriaisConsumoSaidasItensInterface } from './material-consumo-saida-item.interface';
import { MateriaisConsumoService } from 'src/materiais-consumo/materiais-consumo.service';
import { User } from 'src/users/user.interface';
export declare class MateriaisConsumoSaidasItensService {
    private materialConsumoSaidaItemRepository;
    private lazyModuleLoader;
    private logsService;
    private materiaisConsumoService;
    constructor(materialConsumoSaidaItemRepository: Repository<MaterialConsumoSaidaItemEntity>, lazyModuleLoader: LazyModuleLoader, logsService: LogsService, materiaisConsumoService: MateriaisConsumoService);
    index(): Promise<MateriaisConsumoSaidasItensInterface>;
    find(id: number): Promise<MaterialConsumoSaidaItemInterface | null>;
    create(objectreq: MaterialConsumoSaidaItemInterface, idUser: User): Promise<void>;
    update(id: number, object: MaterialConsumoSaidaItemInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    whereMatCon(id: number): Promise<MateriaisConsumoSaidasItensInterface>;
}
