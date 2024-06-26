import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { VeiculoTipo as VeiculoTipoEntity } from './veiculo-tipo.entity';
import { VeiculoTipo as VeiculoTipoInterface, VeiculosTipos as VeiculosTiposInterface } from './veiculo-tipo.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class VeiculosTiposService {
    private veiculoTipoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(veiculoTipoRepository: Repository<VeiculoTipoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<VeiculosTiposInterface>;
    find(id: number): Promise<VeiculoTipoInterface | null>;
    create(object: VeiculoTipoInterface, idUser: User): Promise<void>;
    update(id: number, object: VeiculoTipoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
