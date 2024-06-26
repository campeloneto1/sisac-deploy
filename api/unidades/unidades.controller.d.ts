import { UnidadesService } from './unidades.service';
import { Unidade, Unidades } from './unidade.interface';
export declare class UnidadesController {
    private unidadesService;
    constructor(unidadesService: UnidadesService);
    index(): Promise<Unidades>;
    find(id: number): Promise<Unidade>;
    create(object: Unidade, req: any): Promise<void>;
    update(id: number, object: Unidade, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
