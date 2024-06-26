import { User } from 'src/users/user.entity';
import { Estado } from 'src/estados/estado.entity';
import { Unidade } from 'src/unidades/unidade.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { Policial } from 'src/policiais/policial.entity';
export declare class Cidade {
    id: number;
    nome: string;
    abreviatura: string;
    estado: Estado;
    unidades: Unidade[];
    subunidades: Subunidade[];
    policiais: Policial[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
