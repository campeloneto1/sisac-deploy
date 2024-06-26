import { PoliciaisService } from './policiais.service';
import { Policiais, Policial } from './policial.interface';
export declare class PoliciaisController {
    private policiaisService;
    constructor(policiaisService: PoliciaisService);
    index(req: any, params: any): Promise<Policiais>;
    disponiveis(req: any, params: any): Promise<Policiais>;
    find(id: number, req: any): Promise<Policial>;
    create(object: Policial, req: any): Promise<void>;
    update(id: number, object: Policial, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    relatorio(object: Policial, req: any): Promise<Policiais>;
    updateFoto(id: number, object: Policial, req: any): Promise<void>;
}
