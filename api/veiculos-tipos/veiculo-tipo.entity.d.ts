import { User } from 'src/users/user.entity';
import { Veiculo } from 'src/veiculos/veiculo.entity';
export declare class VeiculoTipo {
    id: number;
    nome: string;
    veiculos: Veiculo[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
