import { User } from 'src/users/user.entity';
import { PatrimonioTipo } from 'src/patrimonios-tipos/patrimonio-tipo.entity';
import { Setor } from 'src/setores/setor.entity';
export declare class Patrimonio {
    id: number;
    setor: Setor;
    patrimonio_tipo: PatrimonioTipo;
    nome: string;
    serial: string;
    tombo: string;
    data_baixa: Date;
    observacoes: string;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
