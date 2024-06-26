import { User } from 'src/users/user.entity';
import { Empresa } from 'src/empresas/empresa.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { ServicoTipo } from 'src/servicos-tipos/servico-tipo.entity';
export declare class Servico {
    id: number;
    subunidade: Subunidade;
    empresa: Empresa;
    servico_tipo: ServicoTipo;
    data_inicial: Date;
    data_final: Date;
    observacoes: string;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
