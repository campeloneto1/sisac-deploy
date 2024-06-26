import { User } from 'src/users/user.entity';
import { Cidade } from 'src/cidades/cidade.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { Contrato } from 'src/contratos/contrato.entity';
import { Servico } from 'src/servicos/servico.entity';
export declare class Empresa {
    id: number;
    subunidade: Subunidade;
    nome: string;
    nome_fantasia: string;
    cnpj: string;
    gerente: string;
    telefone1: string;
    telefone2: string;
    email: string;
    rua: string;
    numero: string;
    bairro: string;
    cep: string;
    cidade: Cidade;
    contratos: Contrato[];
    servicos: Servico[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
