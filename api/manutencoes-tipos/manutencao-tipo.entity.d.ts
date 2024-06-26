import { User } from 'src/users/user.entity';
import { VeiculoOficina } from 'src/veiculos-oficinas/veiculo-oficina.entity';
export declare class ManutencaoTipo {
    id: number;
    nome: string;
    veiculos_oficinas: VeiculoOficina[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
