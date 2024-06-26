import { LazyModuleLoader } from '@nestjs/core';
import { Repository } from 'typeorm';
import { Sexo as SexoEntity } from './sexo.entity';
import { Sexo as SexoInterface, Sexos as SexosInterface } from './sexo.interface';
import { User } from 'src/users/user.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class SexosService {
    private sexoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(sexoRepository: Repository<SexoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<SexosInterface>;
    find(id: number): Promise<SexoInterface | null>;
    create(object: SexoInterface, idUser: User): Promise<void>;
    update(id: number, object: SexoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
