import { User } from 'src/users/user.entity';
import { Armamento } from 'src/armamentos/armamento.entity';
export declare class ArmamentoTipo {
    id: number;
    nome: string;
    calibres: boolean;
    tamanhos: boolean;
    armamentos: Armamento[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
