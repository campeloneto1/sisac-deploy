import { User } from 'src/users/user.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { Policial } from 'src/policiais/policial.entity';
import { Patrimonio } from 'src/patrimonios/patrimonio.entity';
export declare class Setor {
    id: number;
    nome: string;
    abreviatura: string;
    telefone: string;
    email: string;
    subunidade: Subunidade;
    policiais: Policial[];
    patrimonios: Patrimonio[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
