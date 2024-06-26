import { User } from 'src/users/user.entity';
import { Modelo } from 'src/modelos/modelo.entity';
export declare class Marca {
    id: number;
    nome: string;
    abreviatura: string;
    armamento: boolean;
    logistica: boolean;
    transporte: boolean;
    modelos: Modelo[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
