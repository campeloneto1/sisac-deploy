import { User } from 'src/users/user.entity';
import { Policial } from 'src/policiais/policial.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { MaterialPolicialItem } from 'src/materiais-policiais-itens/material-policial-item.entity';
export declare class MaterialPolicial {
    id: number;
    data_emprestimo: Date;
    data_devolucao: Date;
    observacoes: string;
    cautela: boolean;
    subunidade: Subunidade;
    policial: Policial;
    materiais_policiais_itens: MaterialPolicialItem[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
