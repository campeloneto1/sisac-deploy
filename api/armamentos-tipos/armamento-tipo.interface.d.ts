import { User } from "src/users/user.interface";
export interface ArmamentoTipo {
    id?: number;
    nome: string;
    calibres?: boolean;
    tamanhos?: boolean;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
export type ArmamentosTipos = Array<ArmamentoTipo>;
