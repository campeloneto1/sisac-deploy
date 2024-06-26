import { User } from 'src/users/user.entity';
import { Pais } from 'src/paises/pais.entity';
import { Cidade } from 'src/cidades/cidade.entity';
export declare class Estado {
    id: number;
    nome: string;
    abreviatura: string;
    pais: Pais;
    cidades: Cidade[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
