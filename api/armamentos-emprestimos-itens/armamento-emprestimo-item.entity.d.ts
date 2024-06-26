import { User } from 'src/users/user.entity';
import { Armamento } from 'src/armamentos/armamento.entity';
import { ArmamentoEmprestimo } from 'src/armamentos-emprestimos/armamento-emprestimo.entity';
export declare class ArmamentoEmprestimoItem {
    id: number;
    quantidade: number;
    quantidade_devolucao: number;
    armamento: Armamento;
    armamento_emprestimo: ArmamentoEmprestimo;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
