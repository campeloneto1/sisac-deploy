import { SubunidadesService } from './subunidades.service';
import { Subunidade, Subunidades } from './subunidade.interface';
export declare class SubunidadesController {
    private subunidadesService;
    constructor(subunidadesService: SubunidadesService);
    index(req: any, params: any): Promise<Subunidades>;
    find(id: number): Promise<Subunidade>;
    create(object: Subunidade, req: any): Promise<void>;
    update(id: number, object: Subunidade, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    wherePais(id: number, req: any): Promise<Subunidades>;
}
