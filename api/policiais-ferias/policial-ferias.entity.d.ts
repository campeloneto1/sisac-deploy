import { User } from 'src/users/user.entity';
import { Policial } from 'src/policiais/policial.entity';
export declare class PolicialFerias {
    id: number;
    policial: Policial;
    ano: number;
    data_inicial: Date;
    dias: number;
    data_final: Date;
    boletim: string;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
