import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { PolicialCurso as PolicialCursoEntity } from './policial-curso.entity';
import { PolicialCurso as PolicialCursoInterface, PoliciaisCursos as PoliciaisCursosInterface } from './policial-curso.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class PoliciaisCursosService {
    private policialCursoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(policialCursoRepository: Repository<PolicialCursoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<PoliciaisCursosInterface>;
    find(id: number, idUser: User): Promise<PolicialCursoInterface | null>;
    create(object: PolicialCursoInterface, idUser: User): Promise<void>;
    update(id: number, object: PolicialCursoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
