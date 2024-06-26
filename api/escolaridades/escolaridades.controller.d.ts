import { EscolaridadesService } from './escolaridades.service';
import { Escolaridade, Escolaridades } from './escolaridade.interface';
export declare class EscolaridadesController {
    private escolaridadesService;
    constructor(escolaridadesService: EscolaridadesService);
    index(): Promise<Escolaridades>;
    policiaisGraduacoes(req: any): Promise<Escolaridade>;
    find(id: number): Promise<Escolaridade>;
    create(object: Escolaridade, req: any): Promise<void>;
    update(id: number, object: Escolaridade, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
