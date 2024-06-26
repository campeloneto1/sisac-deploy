import { ArmamentoEmprestimoItem, ArmamentosEmprestimosItens } from './armamento-emprestimo-item.interface';
import { ArmamentosEmprestimosItensService } from './armamentos-emprestimos-itens.service';
export declare class ArmamentosEmprestimosItensController {
    private armamentosEmprestimosItensService;
    constructor(armamentosEmprestimosItensService: ArmamentosEmprestimosItensService);
    index(): Promise<ArmamentosEmprestimosItens>;
    find(id: number): Promise<ArmamentoEmprestimoItem>;
    create(object: ArmamentoEmprestimoItem, req: any): Promise<void>;
    update(id: number, object: ArmamentoEmprestimoItem, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
