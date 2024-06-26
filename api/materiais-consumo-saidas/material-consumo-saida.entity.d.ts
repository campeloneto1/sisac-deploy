import { User } from 'src/users/user.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { MaterialConsumoSaidaItem } from 'src/materiais-consumo-saidas-itens/material-consumo-saida-item.entity';
export declare class MaterialConsumoSaida {
    id: number;
    data_saida: Date;
    observacoes: string;
    subunidade: Subunidade;
    user: User;
    materiais_consumo_saidas_itens: MaterialConsumoSaidaItem[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
