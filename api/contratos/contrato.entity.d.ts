import { User } from 'src/users/user.entity';
import { Empresa } from 'src/empresas/empresa.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { ContratoTipo } from 'src/contratos-tipos/contrato-tipo.entity';
import { ContratoObjeto } from 'src/contratos-objetos/contrato-objeto.entity';
import { Policial } from 'src/policiais/policial.entity';
import { ContratoLancamento } from 'src/contratos-lancamentos/contrato-lancamento.entity';
export declare class Contrato {
    id: number;
    subunidade: Subunidade;
    empresa: Empresa;
    contrato_tipo: ContratoTipo;
    contrato_objeto: ContratoObjeto;
    gestor: Policial;
    fiscal: Policial;
    numero_contrato: string;
    numero_sacc: string;
    valor_global: number;
    valor_usado: number;
    data_inicial: Date;
    data_final: Date;
    prorrogavel: boolean;
    observacoes: string;
    quantidade_diarias: number;
    numero_porrogacao: number;
    contrato_prorrogado: Contrato;
    porcentagem_aditivado: number;
    observacoes_aditivado: string;
    contratos_lancamentos: ContratoLancamento[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}