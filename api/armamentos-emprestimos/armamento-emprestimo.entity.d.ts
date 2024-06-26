import { User } from 'src/users/user.entity';
import { Policial } from 'src/policiais/policial.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { ArmamentoEmprestimoItem } from 'src/armamentos-emprestimos-itens/armamento-emprestimo-item.entity';
export declare class ArmamentoEmprestimo {
    id: number;
    data_emprestimo: Date;
    data_devolucao: Date;
    observacoes: string;
    cautela: boolean;
    subunidade: Subunidade;
    policial: Policial;
    armamentos_emprestimos_itens: ArmamentoEmprestimoItem[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
