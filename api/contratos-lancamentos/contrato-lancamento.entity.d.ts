import { User } from 'src/users/user.entity';
import { Contrato } from 'src/contratos/contrato.entity';
export declare class ContratoLancamento {
    id: number;
    contrato: Contrato;
    valor: number;
    mes_referencia: Date;
    observacoes: string;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
