import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { MateriaisConsumoService } from 'src/materiais-consumo/materiais-consumo.service';
import { Repository } from 'typeorm';
import { MaterialConsumoSaida as MaterialConsumoSaidaEntity } from './material-consumo-saida.entity';
import { MaterialConsumoSaida as MaterialConsumoSaidaInterface, MateriaisConsumoSaidas as MateriaisConsumoSaidasInterface } from './material-consumo-saida.interface';
import { User } from 'src/users/user.interface';
import { MateriaisConsumoSaidasItensService } from 'src/materiais-consumo-saidas-itens/materiais-consumo-saidas-itens.service';
export declare class MateriaisConsumoSaidasService {
    private amaterialConsumoSaidaRepository;
    private lazyModuleLoader;
    private materiaisConsumoSaidasItensService;
    private materiaisConsumoService;
    private logsService;
    constructor(amaterialConsumoSaidaRepository: Repository<MaterialConsumoSaidaEntity>, lazyModuleLoader: LazyModuleLoader, materiaisConsumoSaidasItensService: MateriaisConsumoSaidasItensService, materiaisConsumoService: MateriaisConsumoService, logsService: LogsService);
    index(params: any, idUser: User): Promise<MateriaisConsumoSaidasInterface>;
    find(id: number, idUser: User): Promise<MaterialConsumoSaidaInterface | null>;
    create(object: MaterialConsumoSaidaInterface, idUser: User): Promise<void>;
    update(id: number, object: MaterialConsumoSaidaInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    relatorio(object: any, idUser: User): Promise<MaterialConsumoSaidaInterface | null>;
}
