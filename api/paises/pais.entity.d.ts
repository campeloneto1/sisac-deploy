import { User } from 'src/users/user.entity';
import { Estado } from 'src/estados/estado.entity';
export declare class Pais {
    id: number;
    nome: string;
    abreviatura: string;
    estados: Estado[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
