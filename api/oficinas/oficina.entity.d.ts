import { User } from 'src/users/user.entity';
import { Cidade } from 'src/cidades/cidade.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { VeiculoOficina } from 'src/veiculos-oficinas/veiculo-oficina.entity';
export declare class Oficina {
    id: number;
    nome: string;
    cnpj: string;
    telefone1: string;
    telefone2: string;
    email: string;
    gerente: string;
    rua: string;
    numero: string;
    bairro: string;
    cep: string;
    cidade: Cidade;
    subunidade: Subunidade;
    veiculos_oficinas: VeiculoOficina[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
