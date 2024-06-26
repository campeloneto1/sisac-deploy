import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { Curso as CursoEntity } from './curso.entity';
import { Curso as CursoInterface, Cursos as CursosInterface } from './curso.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class CursosService {
    private cursoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(cursoRepository: Repository<CursoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<CursosInterface>;
    find(id: number): Promise<CursoInterface | null>;
    create(object: CursoInterface, idUser: User): Promise<void>;
    update(id: number, object: CursoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
