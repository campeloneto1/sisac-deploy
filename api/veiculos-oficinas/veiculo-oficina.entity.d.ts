import { User } from 'src/users/user.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { Veiculo } from 'src/veiculos/veiculo.entity';
import { Oficina } from 'src/oficinas/oficina.entity';
import { ManutencaoTipo } from 'src/manutencoes-tipos/manutencao-tipo.entity';
export declare class VeiculoOficina {
    id: number;
    veiculo: Veiculo;
    oficina: Oficina;
    manutencao_tipo: ManutencaoTipo;
    data_inicial: Date;
    data_final: Date;
    km_inicial: number;
    km_final: number;
    observacoes: string;
    subunidade: Subunidade;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
