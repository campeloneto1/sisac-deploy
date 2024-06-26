import { User } from 'src/users/user.entity';
import { Modelo } from 'src/modelos/modelo.entity';
import { ArmamentoTipo } from 'src/armamentos-tipos/armamento-tipo.entity';
import { ArmamentoCalibre } from 'src/armamentos-calibres/armamento-calibre.entity';
import { ArmamentoTamanho } from 'src/armamentos-tamanhos/armamento-tamanho.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { ArmamentoEmprestimoItem } from 'src/armamentos-emprestimos-itens/armamento-emprestimo-item.entity';
export declare class Armamento {
    id: number;
    serial: string;
    quantidade: number;
    quantidade_disponivel: number;
    data_validade: Date;
    data_baixa: Date;
    observacoes: string;
    subunidade: Subunidade;
    modelo: Modelo;
    armamento_tipo: ArmamentoTipo;
    armamento_calibre: ArmamentoCalibre;
    armamento_tamanho: ArmamentoTamanho;
    armamentos_emprestimos_itens: ArmamentoEmprestimoItem[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
