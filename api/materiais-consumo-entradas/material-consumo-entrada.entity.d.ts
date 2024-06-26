import { User } from 'src/users/user.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { MaterialConsumoEntradaItem } from 'src/materiais-consumo-entradas-itens/material-consumo-entrada-item.entity';
export declare class MaterialConsumoEntrada {
    id: number;
    data_entrada: Date;
    observacoes: string;
    subunidade: Subunidade;
    user: User;
    materiais_consumo_entradas_itens: MaterialConsumoEntradaItem[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
