import { Subunidade } from 'src/subunidades/subunidade.entity';
import { Policial } from 'src/policiais/policial.entity';
import { UserSubunidade } from 'src/users-subunidades/user-subunidade.entity';
export declare class User {
    id: number;
    nome: string;
    telefone: string;
    email: string;
    cpf: string;
    password: string;
    salt: string;
    policial: Policial;
    perfil: User;
    subunidade: Subunidade;
    users_subunidades: UserSubunidade[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
