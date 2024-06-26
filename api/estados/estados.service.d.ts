import { Estado as EstadoEntity } from './estado.entity';
import { Estado as EstadoInterface, Estados as EstadosInterface } from './estado.interface';
import { Repository } from 'typeorm';
import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class EstadosService {
    private estadoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(estadoRepository: Repository<EstadoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<EstadosInterface>;
    find(id: number): Promise<EstadoInterface | null>;
    create(object: EstadoInterface, idUser: User): Promise<void>;
    update(id: number, object: EstadoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    wherePais(id: number): Promise<EstadosInterface | null>;
}
