import { ContratosLancamentosService } from './contratos-lancamentos.service';
import { ContratoLancamento, ContratosLancamentos } from './contrato-lancamento.interface';
export declare class ContratosLancamentosController {
    private contratosLancamentosService;
    constructor(contratosLancamentosService: ContratosLancamentosService);
    index(req: any): Promise<ContratosLancamentos>;
    find(id: number): Promise<ContratoLancamento>;
    create(object: ContratoLancamento, req: any): Promise<void>;
    update(id: number, object: ContratoLancamento, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
