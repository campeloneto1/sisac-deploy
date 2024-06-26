import { User } from 'src/users/user.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { Veiculo } from 'src/veiculos/veiculo.entity';
import { Policial } from 'src/policiais/policial.entity';
import { Cidade } from 'src/cidades/cidade.entity';
export declare class VeiculoPolicial {
    id: number;
    veiculo: Veiculo;
    policial: Policial;
    data_inicial: Date;
    data_final: Date;
    km_inicial: number;
    km_final: number;
    observacoes: string;
    cidade: Cidade;
    subunidade: Subunidade;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
