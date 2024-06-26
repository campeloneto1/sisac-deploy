import { User } from 'src/users/user.entity';
import { Policial } from 'src/policiais/policial.entity';
import { PublicacaoTipo } from 'src/publicacoes-tipos/publicacao-tipo.entity';
export declare class PolicialPublicacao {
    id: number;
    policial: Policial;
    publicacao_tipo: PublicacaoTipo;
    texto: string;
    boletim: string;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
