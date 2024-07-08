import { PoliciaisFeriasService } from './policiais-ferias.service';
import { PoliciaisFerias, PolicialFerias } from './policial-ferias.interface';
export declare class PoliciaisFeriasController {
    private policiaisAtestadosService;
    constructor(policiaisAtestadosService: PoliciaisFeriasService);
    index(req: any, params: any): Promise<PoliciaisFerias>;
    wherePol(id: number, req: any): Promise<PoliciaisFerias>;
    find(id: number, req: any): Promise<PolicialFerias>;
    create(object: PolicialFerias, req: any): Promise<void>;
    update(id: number, object: PolicialFerias, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
