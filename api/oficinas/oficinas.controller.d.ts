import { Oficina, Oficinas } from './oficina.interface';
import { OficinasService } from './oficinas.service';
export declare class OficinasController {
    private oficinasService;
    constructor(oficinasService: OficinasService);
    index(req: any, params: any): Promise<Oficinas>;
    find(id: number, req: any): Promise<Oficina>;
    create(object: Oficina, req: any): Promise<void>;
    update(id: number, object: Oficina, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
