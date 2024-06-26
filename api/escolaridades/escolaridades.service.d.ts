import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { Repository } from 'typeorm';
import { Escolaridade as EscolaridadeEntity } from './escolaridade.entity';
import { Escolaridade as EscolaridadeInterface, Escolaridades as EscolaridadesInterface } from './escolaridade.interface';
import { User } from 'src/users/user.interface';
export declare class EscolaridadesService {
    private escolaridadeRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(escolaridadeRepository: Repository<EscolaridadeEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<EscolaridadesInterface>;
    find(id: number): Promise<EscolaridadeInterface | null>;
    create(object: EscolaridadeInterface, idUser: User): Promise<void>;
    update(id: number, object: EscolaridadeInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    policiaisEscolaridades(idUser: User): Promise<any>;
}
