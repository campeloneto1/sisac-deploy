import { PoliciaisRequeridasService } from './policiais-requeridas.service';
import { PolicialRequerida, PoliciaisRequeridas } from './policial-requerida.interface';
export declare class PoliciaisRequeridasController {
    private policiaisRequeridasService;
    constructor(policiaisRequeridasService: PoliciaisRequeridasService);
    index(req: any, params: any): Promise<PoliciaisRequeridas>;
    find(id: number, req: any): Promise<PolicialRequerida>;
    create(object: PolicialRequerida, req: any): Promise<void>;
    update(id: number, object: PolicialRequerida, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
