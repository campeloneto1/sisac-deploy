import { User } from 'src/users/user.entity';
import { Cidade } from 'src/cidades/cidade.entity';
import { Sexo } from 'src/sexos/sexo.entity';
import { Graduacao } from 'src/graduacoes/graduacao.entity';
import { Setor } from 'src/setores/setor.entity';
import { PolicialPublicacao } from 'src/policiais-publicacoes/policial-publicacao.entity';
import { PolicialFerias } from 'src/policiais-ferias/policial-ferias.entity';
import { PolicialAtestado } from 'src/policiais-atestados/policial-atestado.entity';
import { ArmamentoEmprestimo } from 'src/armamentos-emprestimos/armamento-emprestimo.entity';
import { Unidade } from 'src/unidades/unidade.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { VeiculoPolicial } from 'src/veiculos-policiais/veiculo-policial.entity';
import { PolicialCurso } from 'src/policiais-cursos/policial-curso.entity';
import { MaterialPolicial } from 'src/materiais-policiais/material-policial.entity';
import { PolicialRequerida } from 'src/policiais-requeridas/policial-requerida.entity';
import { Escolaridade } from 'src/escolaridades/escolaridade.entity';
export declare class Policial {
    id: number;
    numeral: string;
    nome: string;
    nome_guerra: string;
    matricula: string;
    cpf: string;
    email: string;
    telefone1: string;
    telefone2: string;
    data_nascimento: Date;
    rua: string;
    numero: string;
    bairro: string;
    cep: string;
    data_inclusao: Date;
    data_apresentacao: Date;
    boletim_inclusao: string;
    boletim_apresentacao: string;
    boletim_transferencia: string;
    foto: string;
    cidade: Cidade;
    sexo: Sexo;
    graduacao: Graduacao;
    setor: Setor;
    escolaridade: Escolaridade;
    user: User;
    policiais_publicacoes: PolicialPublicacao[];
    policiais_ferias: PolicialFerias[];
    policiais_atestados: PolicialAtestado[];
    policiais_cursos: PolicialCurso[];
    policiais_requeridas: PolicialRequerida[];
    armamentos_emprestimos: ArmamentoEmprestimo[];
    materiais_policiais: MaterialPolicial[];
    comandantes_unidades: Unidade[];
    subcomandantes_unidades: Unidade[];
    comandantes_subunidades: Subunidade[];
    subcomandantes_subunidades: Subunidade[];
    veiculos_policiais: VeiculoPolicial[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
