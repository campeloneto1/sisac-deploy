import { LazyModuleLoader } from '@nestjs/core';
import { Repository } from 'typeorm';
import { Modelo as ModeloEntity } from './modelo.entity';
import { Modelo as ModeloInterface, Modelos as ModelosInterface } from './modelo.interface';
import { User } from 'src/users/user.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class ModelosService {
    private modeloRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(modeloRepository: Repository<ModeloEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<ModelosInterface>;
    find(id: number): Promise<ModeloInterface | null>;
    create(object: ModeloInterface, idUser: User): Promise<void>;
    update(id: number, object: ModeloInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    whereMarca(id: number): Promise<ModelosInterface | null>;
}
