import { ServicosService } from './servicos.service';
import { Servico, Servicos } from './servico.interface';
export declare class ServicosController {
    private servicosService;
    constructor(servicosService: ServicosService);
    index(req: any, params: any): Promise<Servicos>;
    find(id: number, req: any): Promise<Servico>;
    create(object: Servico, req: any): Promise<void>;
    update(id: number, object: Servico, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
