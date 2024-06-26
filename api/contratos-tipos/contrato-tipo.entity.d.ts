import { User } from 'src/users/user.entity';
export declare class ContratoTipo {
    id: number;
    nome: string;
    diarias: boolean;
    servico: boolean;
    fatura: boolean;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
