import { User } from 'src/users/user.entity';
import { Cidade } from 'src/cidades/cidade.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { Policial } from 'src/policiais/policial.entity';
export declare class Unidade {
    id: number;
    nome: string;
    abreviatura: string;
    telefone: string;
    email: string;
    rua: string;
    numero: string;
    bairro: string;
    cep: string;
    cidade: Cidade;
    comandante: Policial;
    subcomandante: Policial;
    subunidades: Subunidade[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
