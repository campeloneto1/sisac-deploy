import { PoliciaisAtestadosService } from './policiais-atestados.service';
import { PolicialAtestado, PoliciaisAtestados } from './policial-atestado.interface';
export declare class PoliciaisAtestadosController {
    private policiaisAtestadosService;
    constructor(policiaisAtestadosService: PoliciaisAtestadosService);
    index(req: any, params: any): Promise<PoliciaisAtestados>;
    wherePol(id: number, req: any): Promise<PoliciaisAtestados>;
    find(id: number, req: any): Promise<PolicialAtestado>;
    create(object: PolicialAtestado, req: any): Promise<void>;
    update(id: number, object: PolicialAtestado, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
