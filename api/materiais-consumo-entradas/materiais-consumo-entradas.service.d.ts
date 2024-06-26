import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { MateriaisConsumoService } from 'src/materiais-consumo/materiais-consumo.service';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { MaterialConsumoEntrada as MaterialConsumoEntradaEntity } from './material-consumo-entrada.entity';
import { MaterialConsumoEntrada as MaterialConsumoEntradaInterface, MateriaisConsumoEntradas as MateriaisConsumoEntradasInterface } from './material-consumo-entrada.interface';
import { MateriaisConsumoEntradasItensService } from 'src/materiais-consumo-entradas-itens/materiais-consumo-entradas-itens.service';
export declare class MateriaisConsumoEntradasService {
    private materialConsumoEntradaRepository;
    private lazyModuleLoader;
    private materiaisConsumoEntradasItensService;
    private materiaisConsumoService;
    private logsService;
    constructor(materialConsumoEntradaRepository: Repository<MaterialConsumoEntradaEntity>, lazyModuleLoader: LazyModuleLoader, materiaisConsumoEntradasItensService: MateriaisConsumoEntradasItensService, materiaisConsumoService: MateriaisConsumoService, logsService: LogsService);
    index(params: any, idUser: User): Promise<MateriaisConsumoEntradasInterface>;
    find(id: number, idUser: User): Promise<MaterialConsumoEntradaInterface | null>;
    create(object: MaterialConsumoEntradaInterface, idUser: User): Promise<void>;
    update(id: number, object: MaterialConsumoEntradaInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    relatorio(object: any, idUser: User): Promise<MaterialConsumoEntradaInterface | null>;
}
