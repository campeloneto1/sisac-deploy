import { ContratosService } from './contratos.service';
import { Contrato, Contratos } from './contrato.interface';
export declare class ContratosController {
    private contratosService;
    constructor(contratosService: ContratosService);
    index(req: any, params: any): Promise<Contratos>;
    find(id: number, req: any): Promise<Contrato>;
    create(object: Contrato, req: any): Promise<void>;
    aditivar(id: number, object: any, req: any): Promise<void>;
    update(id: number, object: Contrato, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
