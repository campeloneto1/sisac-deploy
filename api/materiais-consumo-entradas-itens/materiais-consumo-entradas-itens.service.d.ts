import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { MateriaisConsumoService } from 'src/materiais-consumo/materiais-consumo.service';
import { Repository } from 'typeorm';
import { MaterialConsumoEntradaItem as MaterialConsumoEntradaItemEntity } from 'src/materiais-consumo-entradas-itens/material-consumo-entrada-item.entity';
import { MaterialConsumoEntradaItem as MaterialConsumoEntradaItemInterface, MateriaisConsumoEntradasItens as MateriaisConsumoEntradasItensInterface } from './material-consumo-entrada-item.interface';
import { User } from 'src/users/user.interface';
export declare class MateriaisConsumoEntradasItensService {
    private materialConsumoEntradaItemRepository;
    private lazyModuleLoader;
    private logsService;
    private materiaisConsumoService;
    constructor(materialConsumoEntradaItemRepository: Repository<MaterialConsumoEntradaItemEntity>, lazyModuleLoader: LazyModuleLoader, logsService: LogsService, materiaisConsumoService: MateriaisConsumoService);
    index(): Promise<MateriaisConsumoEntradasItensInterface>;
    find(id: number): Promise<MaterialConsumoEntradaItemInterface | null>;
    create(objectreq: MaterialConsumoEntradaItemInterface, idUser: User): Promise<void>;
    update(id: number, object: MaterialConsumoEntradaItemInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    whereMatCon(id: number): Promise<MateriaisConsumoEntradasItensInterface>;
}
