import { CursosService } from './cursos.service';
import { Curso, Cursos } from './curso.interface';
export declare class CursosController {
    private cursosService;
    constructor(cursosService: CursosService);
    index(): Promise<Cursos>;
    find(id: number): Promise<Curso>;
    create(object: Curso, req: any): Promise<void>;
    update(id: number, object: Curso, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
