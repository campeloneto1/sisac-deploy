import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { MaterialConsumo as MaterialConsumoEntity } from './material-consumo.entity';
import { MaterialConsumo as MaterialConsumoInterface, MateriaisConsumo as MateriaisConsumoInterface } from './material-consumo.interface';
export declare class MateriaisConsumoService {
    private materialConsumoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(materialConsumoRepository: Repository<MaterialConsumoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<MateriaisConsumoInterface>;
    find(id: number, idUser: User): Promise<MaterialConsumoInterface | null>;
    find2(id: number, idUser: User): Promise<MaterialConsumoInterface | null>;
    create(object: MaterialConsumoInterface, idUser: User): Promise<void>;
    update(id: number, object: MaterialConsumoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    disponiveis(params: any, idUser: User): Promise<MateriaisConsumoInterface>;
    atualizarQuantidadeUp(id: number, quantidade: number): Promise<void>;
    atualizarQuantidadeDown(id: number, quantidade: number): Promise<void>;
    vencendo(params: any, idUser: User): Promise<MateriaisConsumoInterface>;
    alerta(params: any, idUser: User): Promise<MateriaisConsumoInterface>;
    relatorio(object: any, idUser: User): Promise<MateriaisConsumoInterface>;
}
