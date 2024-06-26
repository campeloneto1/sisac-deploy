import { User } from 'src/users/user.entity';
export declare class Log {
    id: number;
    object: string;
    object_old: string;
    mensagem: string;
    tipo: number;
    table: string;
    fk: number;
    user: User;
    created_at: Date;
    updated_at: Date;
}
