import { User } from 'src/users/user.entity';
import { Policial } from 'src/policiais/policial.entity';
export declare class PolicialAtestado {
    id: number;
    policial: Policial;
    data_inicial: Date;
    data_copem: Date;
    dias: number;
    data_final: Date;
    cid: string;
    hospital: string;
    crm: string;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
