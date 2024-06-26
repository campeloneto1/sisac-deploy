import { User } from 'src/users/user.entity';
import { VeiculoPolicial } from 'src/veiculos-policiais/veiculo-policial.entity';
export declare class VeiculoPolicialAlteracao {
    id: number;
    veiculo_policial: VeiculoPolicial;
    foto: string;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
