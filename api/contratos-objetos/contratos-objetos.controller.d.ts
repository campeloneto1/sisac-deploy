import { ContratosObjetosService } from './contratos-objetos.service';
import { ContratoObjeto, ContratosObjetos } from './contrato-objeto.interface';
export declare class ContratosObjetosController {
    private contratosObjetosService;
    constructor(contratosObjetosService: ContratosObjetosService);
    index(): Promise<ContratosObjetos>;
    find(id: number): Promise<ContratoObjeto>;
    create(object: ContratoObjeto, req: any): Promise<void>;
    update(id: number, object: ContratoObjeto, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
