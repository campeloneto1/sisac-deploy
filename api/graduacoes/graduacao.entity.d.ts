import { User } from 'src/users/user.entity';
import { Policial } from 'src/policiais/policial.entity';
export declare class Graduacao {
    id: number;
    nome: string;
    abreviatura: string;
    policiais: Policial[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
