import { LazyModuleLoader } from '@nestjs/core';
import { Repository } from 'typeorm';
import { ArmamentoTipo as ArmamentoTipoEntity } from './armamento-tipo.entity';
import { ArmamentoTipo as ArmamentoTipoInterface, ArmamentosTipos as ArmamentosTiposInterface } from './armamento-tipo.interface';
import { User } from 'src/users/user.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class ArmamentosTiposService {
    private armamentoTipoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(armamentoTipoRepository: Repository<ArmamentoTipoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<ArmamentosTiposInterface>;
    find(id: number): Promise<ArmamentoTipoInterface | null>;
    create(object: ArmamentoTipoInterface, idUser: User): Promise<void>;
    update(id: number, object: ArmamentoTipoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
