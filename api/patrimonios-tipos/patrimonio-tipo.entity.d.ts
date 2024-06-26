import { User } from 'src/users/user.entity';
import { Patrimonio } from 'src/patrimonios/patrimonio.entity';
export declare class PatrimonioTipo {
    id: number;
    nome: string;
    patrimonios: Patrimonio[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
