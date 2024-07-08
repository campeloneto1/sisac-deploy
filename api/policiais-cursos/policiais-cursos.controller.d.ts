import { PoliciaisCursosService } from './policiais-cursos.service';
import { PoliciaisCursos, PolicialCurso } from './policial-curso.interface';
export declare class PoliciaisCursosController {
    private policiaisCursosService;
    constructor(policiaisCursosService: PoliciaisCursosService);
    index(req: any, params: any): Promise<PoliciaisCursos>;
    wherePol(id: number, req: any): Promise<PoliciaisCursos>;
    find(id: number, req: any): Promise<PolicialCurso>;
    create(object: PolicialCurso, req: any): Promise<void>;
    update(id: number, object: PolicialCurso, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
