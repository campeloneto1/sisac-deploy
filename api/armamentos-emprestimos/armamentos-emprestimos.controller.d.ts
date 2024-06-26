import { ArmamentoEmprestimo, ArmamentosEmprestimos } from './armamento-emprestimo.interface';
import { ArmamentosEmprestimosService } from './armamentos-emprestimos.service';
export declare class ArmamentosEmprestimosController {
    private armamentosEmprestimosService;
    constructor(armamentosEmprestimosService: ArmamentosEmprestimosService);
    index(req: any, params: any): Promise<ArmamentosEmprestimos>;
    find(id: number, req: any): Promise<ArmamentoEmprestimo>;
    create(object: ArmamentoEmprestimo, req: any): Promise<void>;
    update(id: number, object: ArmamentoEmprestimo, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    receber(object: any, req: any): Promise<void>;
    relatorio(object: any, req: any): Promise<ArmamentoEmprestimo>;
}
