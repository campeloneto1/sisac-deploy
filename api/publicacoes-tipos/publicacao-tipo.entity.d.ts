import { User } from 'src/users/user.entity';
import { PolicialPublicacao } from 'src/policiais-publicacoes/policial-publicacao.entity';
export declare class PublicacaoTipo {
    id: number;
    nome: string;
    policiais: PolicialPublicacao[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
